const { OrderModel } = require("../models");

const OrderService = {
    async generateOrderID() {
        const res = await OrderModel.generateOrderID();
        return res[0].id;
    },

    async getOrderBy() {
        return await OrderModel.getOrderBy();
    },

    async getOrderByID(data) {
        const res = await OrderModel.getOrderByID(data);
        return res[0];
    },

    async insertOrder(data) {
        data.order_id = await OrderService.generateOrderID(data);
        await OrderModel.insertOrder(data);
        return await OrderModel.getOrderByID({ order_id: data.order_id });
    },

    async updateOrderBy(data) {
        await OrderModel.updateOrderBy(data);
        return await OrderModel.getOrderByID({ order_id: data.order_id });
    },

    async deleteOrderBy(data) {
        return await OrderModel.deleteOrderBy(data);
    }
};

module.exports = OrderService;
