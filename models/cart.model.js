const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        cart_id: { type: String, required: true, unique: true },
        cart_status: { type: String, required: true },
        cart_amount: { type: Number, required: true },
        table_id: { type: String, required: true },
        menu_id: { type: String, required: true },
        add_date: { type: Date, default: Date.now }
    }
);

const Cart = mongoose.model('tb_carts', cartSchema);

module.exports = Cart;
