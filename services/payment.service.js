const { PaymentModel } = require('../models');

const moment = require('moment');

const generatePaymentID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestPayment = await PaymentModel.findOne().sort({ _id: -1 });

    const lastSequence = latestPayment ? parseInt(latestPayment.payment_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newPaymentID = `U${today}-${sequence}`;
    while (await PaymentModel.exists({ payment_id: newPaymentID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newPaymentID = `U${today}-${sequence}`;
    }
    return newPaymentID;
};

const getPaymentBy = async () => {
    return await PaymentModel.find();
};

const getPaymentByID = async (data) => {
    const res = await PaymentModel.find({ payment_id: data.payment_id });
    return res[0]
};

const insertPayment = async (data) => {
    data.payment_id = await generatePaymentID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await PaymentModel.create(data);
};

const updatePaymentBy = async (data) => {
    return await PaymentModel.findOneAndUpdate(
        { payment_id: data.payment_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deletePaymentBy = async (data) => {
    return await PaymentModel.findOneAndDelete({ payment_id: data.payment_id });
};

module.exports = { generatePaymentID, getPaymentBy, getPaymentByID, insertPayment, updatePaymentBy, deletePaymentBy };