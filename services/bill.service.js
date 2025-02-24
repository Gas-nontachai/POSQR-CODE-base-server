const { BillModel } = require('../models');
const filterEmthyKey = require('../utils/filterEmthyKey');
const moment = require('moment');

const generateBillID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestBill = await BillModel.findOne().sort({ _id: -1 });

    const lastSequence = latestBill ? parseInt(latestBill.bill_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newBillID = `B${today}-${sequence}`;
    while (await BillModel.exists({ bill_id: newBillID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newBillID = `B${today}-${sequence}`;
    }
    return newBillID;
};

const getBillBy = async (data) => {
    return await BillModel.find(data);
};

const getBillByID = async (data) => {
    const res = await BillModel.find({ bill_id: data.bill_id });
    return res[0]
};

const insertBill = async (data) => {
    data.bill_id ? data.bill_id : data.bill_id = await generateBillID();

    data._id && delete data._id;

    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    if (!data.start_time || (typeof data.start_time === 'string' && data.start_time.trim() === '')) {
        data.start_time = new Date();
    }
    if (!data.expired_time || (typeof data.expired_time === 'string' && data.expired_time.trim() === '')) {
        const expired_time = new Date();
        expired_time.setHours(expired_time.getHours() + 1);
        expired_time.setMinutes(expired_time.getMinutes() + 30);
        data.expired_time = expired_time;
    }

    return await BillModel.create(data);
};

const updateBillBy = async (data) => {
    const updateFields = filterEmthyKey(data, ["bill_id"]);

    if (Object.keys(updateFields).length === 0) {
        throw new Error("No valid fields to update.");
    }

    return await BillModel.findOneAndUpdate(
        { bill_id: data.bill_id },
        { $set: updateFields },
        { new: true, runValidators: true }
    );
};

const deleteBillBy = async (data) => {
    return await BillModel.findOneAndDelete({ bill_id: data.bill_id });
};

module.exports = { generateBillID, getBillBy, getBillByID, insertBill, updateBillBy, deleteBillBy };