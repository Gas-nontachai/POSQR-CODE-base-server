const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema(
    {
        store_id: { type: String, required: true, unique: true },
        user_id: { type: String },
        store_name: { type: String, required: true },
        store_slogan: { type: String, required: true },
        store_description: { type: String },
        store_address: { type: String },
        store_price: { type: String },
        store_phone: { type: String },
        store_open: { type: Date },
        store_close: { type: Date },
        add_date: { type: Date, default: Date.now }
    }
);

const Stores = mongoose.model('tb_stores', storesSchema);

module.exports = Stores;
