const mongoose = require('mongoose');

const orderdetailSchema = new mongoose.Schema(
    {
        order_detail_id: { type: String, required: true, unique: true },
        order_id: { type: String, required: true },
        menu_id: { type: String, required: true },
        quantity: { type: Number, required: true },
        subtotal: { type: Number, required: true },
        add_date: { type: Date, default: Date.now }
    }
);

const OrderDetail = mongoose.model('tb_orderdetails', orderdetailSchema);

module.exports = OrderDetail;
