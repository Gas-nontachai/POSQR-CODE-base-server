const { OrderModel } = require('../models');

const moment = require('moment');

const generateOrderID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestOrder = await OrderModel.findOne().sort({ _id: -1 });

    const lastSequence = latestOrder ? parseInt(latestOrder.order_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newOrderID = `OR${today}-${sequence}`;
    while (await OrderModel.exists({ order_id: newOrderID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newOrderID = `OR${today}-${sequence}`;
    }
    return newOrderID;
};

const getOrderBy = async () => {
    return await OrderModel.find();
};

const getOrderByID = async (data) => {
    const res = await OrderModel.find({ order_id: data.order_id });
    return res[0]
};

const insertOrder = async (data) => {
    data.order_id = await generateOrderID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await OrderModel.create(data);
};

const updateOrderBy = async (data) => {
    return await OrderModel.findOneAndUpdate(
        { order_id: data.order_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteOrderBy = async (data) => {
    return await OrderModel.findOneAndDelete({ order_id: data.order_id });
};

module.exports = { generateOrderID, getOrderBy, getOrderByID, insertOrder, updateOrderBy, deleteOrderBy };