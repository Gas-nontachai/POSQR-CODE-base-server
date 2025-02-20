const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema(
    {
        table_id: { type: String, required: true, unique: true },
        table_number: { type: String },
        table_status: { type: String, required: true },
        add_date: { type: Date, default: Date.now }
    }
);

const Table = mongoose.model('tb_table', tableSchema);

module.exports = Table;
