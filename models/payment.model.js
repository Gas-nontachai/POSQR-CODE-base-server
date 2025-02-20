const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        payment_id: { type: String, required: true, unique: true },
        table_id: { type: String, required: true },
        amount: { type: Number, required: true },
        payment_status: { type: String, required: true },
        payment_time: { type: Date, default: Date.now }
    }
);

const Payment = mongoose.model('tb_payments', paymentSchema);

module.exports = Payment;
