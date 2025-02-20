const { OrderService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateOrderID = handleRequest(async () => {
    return await OrderService.generateOrderID();
});

exports.getOrderBy = handleRequest(async () => {
    return await OrderService.getOrderBy();
});

exports.getOrderByID = handleRequest(async (req) => {
    return await OrderService.getOrderByID(req.body);
});

exports.insertOrder = handleRequest(async (req) => {
    return await OrderService.insertOrder(req.body);
});

exports.updateOrderBy = handleRequest(async (req) => {
    return await OrderService.updateOrderBy(req.body);
});

exports.deleteOrderBy = handleRequest(async (req) => {
    return await OrderService.deleteOrderBy(req.body);
});