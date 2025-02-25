const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        order_id: { type: String, required: true, unique: true },
        table_id: { type: String, },
        bill_id: { type: String, },
        order_status: { type: String, },
        order_items: [
            {
                cart_id: { type: String, },
            }
        ],
        order_time: { type: Date, default: Date.now }
    }
);

const Order = mongoose.model('tb_orders', orderSchema);

module.exports = Order;
