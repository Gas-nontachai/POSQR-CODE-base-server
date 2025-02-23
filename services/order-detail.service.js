const { OrderDetailModel } = require('../models');

const moment = require('moment');

const generateOrderDetailID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestOrderDetail = await OrderDetailModel.findOne().sort({ _id: -1 });

    const lastSequence = latestOrderDetail ? parseInt(latestOrderDetail.order_detail_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newOrderDetailID = `ORD${today}-${sequence}`;
    while (await OrderDetailModel.exists({ order_detail_id: newOrderDetailID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newOrderDetailID = `ORD${today}-${sequence}`;
    }
    return newOrderDetailID;
};

const getOrderDetailBy = async (data) => {
    return await OrderDetailModel.find(data);
};

const getOrderDetailByID = async (data) => {
    const res = await OrderDetailModel.find({ order_detail_id: data.order_detail_id });
    return res[0]
};

const insertOrderDetail = async (data) => {
    data.order_detail_id = await generateOrderDetailID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await OrderDetailModel.create(data);
};

const updateOrderDetailBy = async (data) => {
    return await OrderDetailModel.findOneAndUpdate(
        { order_detail_id: data.order_detail_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteOrderDetailBy = async (data) => {
    return await OrderDetailModel.findOneAndDelete({ order_detail_id: data.order_detail_id });
};

module.exports = { generateOrderDetailID, getOrderDetailBy, getOrderDetailByID, insertOrderDetail, updateOrderDetailBy, deleteOrderDetailBy };