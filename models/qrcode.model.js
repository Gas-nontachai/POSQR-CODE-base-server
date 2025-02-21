const mongoose = require('mongoose');

const qrcodeSchema = new mongoose.Schema(
    {
        qrcode_id: { type: String, required: true, unique: true },
        table_id: { type: String, },
        table_number: { type: String, },
        table_start_time: { type: Date, },
        table_end_time: { type: Date, },
        add_date: { type: Date, default: Date.now }
    }
);

const QrCode = mongoose.model('tb_qrcodes', qrcodeSchema);

module.exports = QrCode;
