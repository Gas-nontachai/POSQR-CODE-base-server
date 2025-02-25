const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema(
    {
        store_id: { type: String, required: true, unique: true },
        store_name: { type: String },
        store_slogan: { type: String },
        store_description: { type: String },
        store_address: { type: String },
        store_price: { type: Number },
        store_phone: { type: String },
        store_img: { type: String, },
        store_logo: { type: String, },
        store_open: { type: String },
        store_close: { type: String },
        add_date: { type: Date, default: Date.now }
    }
);

const Stores = mongoose.model('tb_stores', storesSchema);

module.exports = Stores;
