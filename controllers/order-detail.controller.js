const { OrderDetailService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateOrderDetailID = handleRequest(async () => {
    return await OrderDetailService.generateOrderDetailID();
});

exports.getOrderDetailBy = handleRequest(async () => {
    return await OrderDetailService.getOrderDetailBy();
});

exports.getOrderDetailByID = handleRequest(async (req) => {
    return await OrderDetailService.getOrderDetailByID(req.body);
});

exports.insertOrderDetail = handleRequest(async (req) => {
    return await OrderDetailService.insertOrderDetail(req.body);
});

exports.updateOrderDetailBy = handleRequest(async (req) => {
    return await OrderDetailService.updateOrderDetailBy(req.body);
});

exports.deleteOrderDetailBy = handleRequest(async (req) => {
    return await OrderDetailService.deleteOrderDetailBy(req.body);
});