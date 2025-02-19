const { OrderDetailService } = require("../services");
const handleRequest = require("../utils/handleRequest");

const OrderDetailController = {
    generateOrderDetailID: handleRequest(async (req) => {
        return await OrderDetailService.generateOrderDetailID();
    }),

    getOrderDetailBy: handleRequest(async (req) => {
        return await OrderDetailService.getOrderDetailBy(req.body);
    }),

    getOrderDetailByID: handleRequest(async (req) => {
        return await OrderDetailService.getOrderDetailByID(req.body);
    }),

    insertOrderDetail: handleRequest(async (req) => {
        return await OrderDetailService.insertOrderDetail(req.body);
    }),

    updateOrderDetailBy: handleRequest(async (req) => {
        return await OrderDetailService.updateOrderDetailBy(req.body);
    }),

    deleteOrderDetailBy: handleRequest(async (req) => {
        return await OrderDetailService.deleteOrderDetailBy(req.body);
    }),
};

module.exports = OrderDetailController;
