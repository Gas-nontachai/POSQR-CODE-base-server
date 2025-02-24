const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        order_id: { type: String, required: true, unique: true },
        table_id: { type: String, required: true },
        bill_id: { type: String, required: true },
        order_status: { type: String, required: true },
        order_items: [
            {
                cart_id: { type: String, required: true },
            }
        ],
        order_time: { type: Date, default: Date.now }
    }
);

const Order = mongoose.model('tb_orders', orderSchema);

module.exports = Order;
