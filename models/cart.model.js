const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        cart_id: { type: String, required: true, unique: true },
        menu_id: { type: String, required: true },
        cart_status: { type: String, required: true },
        add_date: { type: String }
    }
);

const Cart = mongoose.model('tb_carts', cartSchema);

module.exports = Cart;
