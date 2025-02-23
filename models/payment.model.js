const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        payment_id: { type: String, required: true, unique: true },
        bill_id: { type: String, required: true },
        table_id: { type: String },
        amount_total: { type: Number },
        payment_method: { type: String },
        payment_status: { type: String },
        payment_time: { type: Date, default: Date.now }
    }
);

const Payment = mongoose.model('tb_payments', paymentSchema);

module.exports = Payment;
