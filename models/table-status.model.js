const mongoose = require('mongoose');

const tableStatusSchema = new mongoose.Schema(
    {
        table_status_id: { type: String, required: true, unique: true },
        table_status_name: { type: String, required: true },
        add_date: { type: Date, default: Date.now }
    }
);

const TableStatus = mongoose.model('tb_table_statuss', tableStatusSchema);

module.exports = TableStatus;
