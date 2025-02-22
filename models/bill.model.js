const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
    {
        bill_id: { type: String, unique: true },
        table_id: { type: String },
        table_number: { type: String },
        amount_customer: { type: String, },
        bill_status: { type: String, },
        qr_code: { type: String, },
        start_time: { type: Date, default: Date.now },
        expired_time: { type: Date, default: Date.now },
        add_date: { type: Date, default: Date.now }
    }
);

const Bill = mongoose.model('tb_bills', billSchema);

module.exports = Bill;
