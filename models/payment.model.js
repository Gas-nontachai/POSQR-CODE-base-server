const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        payment_id: { type: String, required: true, unique: true },
        order_id: { type: String, required: true },
        amount: { type: Number, required: true, unique: true },
        payment_method: { type: String, required: true, unique: true },
        payment_status: { type: String, required: true },
        payment_time: { type: Date, default: Date.now }
    }
);

const Payment = mongoose.model('tb_payments', paymentSchema);

module.exports = Payment;
