const { OrderModel } = require('../models');
const { updateCartBy } = require('../services/cart.service');
const filterEmthyKey = require('../utils/filterEmthyKey');

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

const getOrderBy = async (data) => {
    return await OrderModel.find(data);
};

const getOrderByID = async (data) => {
    const res = await OrderModel.find({ order_id: data.order_id });
    return res[0]
};

const insertOrder = async (data) => {
    let dataUpdate
    data.order_id = await generateOrderID()
    if (!data.order_time || (typeof data.order_time === 'string' && data.order_time.trim() === '')) {
        data.order_time = new Date();
    }
    data.order_items && (
        data.order_items.forEach(async element => {
            dataUpdate = {
                cart_id: element.cart_id,
                cart_status: 'in-active'
            }
            await updateCartBy(dataUpdate)
        })
    )
    return await OrderModel.create(data);
};

const updateOrderBy = async (data) => {
    const updateFields = filterEmthyKey(data, ["order_id"]);

    if (Object.keys(updateFields).length === 0) {
        throw new Error("No valid fields to update.");
    }

    return await OrderModel.findOneAndUpdate(
        { order_id: data.order_id },
        { $set: updateFields },
        { new: true, runValidators: true }
    );
};

const deleteOrderBy = async (data) => {
    return await OrderModel.findOneAndDelete({ order_id: data.order_id });
};

module.exports = { generateOrderID, getOrderBy, getOrderByID, insertOrder, updateOrderBy, deleteOrderBy };