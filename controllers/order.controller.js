const { OrderService } = require("../services");
const handleRequest = require("../utils/handleRequest");

const OrderController = {
    generateOrderID: handleRequest(async (req) => {
        return await OrderService.generateOrderID();
    }),

    getOrderBy: handleRequest(async (req) => {
        return await OrderService.getOrderBy(req.body);
    }),

    getOrderByID: handleRequest(async (req) => {
        return await OrderService.getOrderByID(req.body);
    }),

    insertOrder: handleRequest(async (req) => {
        return await OrderService.insertOrder(req.body);
    }),

    updateOrderBy: handleRequest(async (req) => {
        return await OrderService.updateOrderBy(req.body);
    }),

    deleteOrderBy: handleRequest(async (req) => {
        return await OrderService.deleteOrderBy(req.body);
    }),
};

module.exports = OrderController;
