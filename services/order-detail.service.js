const { OrderDetailModel } = require("../models");

const OrderDetailService = {
    async generateOrderDetailID() {
        const res = await OrderDetailModel.generateOrderDetailID();
        return res[0].id;
    },

    async getOrderDetailBy() {
        return await OrderDetailModel.getOrderDetailBy();
    },

    async getOrderDetailByID(data) {
        const res = await OrderDetailModel.getOrderDetailByID(data);
        return res[0];
    },

    async insertOrderDetail(data) {
        data.orderdetail_id = await OrderDetailService.generateOrderDetailID(data);
        await OrderDetailModel.insertOrderDetail(data);
        return await OrderDetailModel.getOrderDetailByID({ orderdetail_id: data.orderdetail_id });
    },

    async updateOrderDetailBy(data) {
        await OrderDetailModel.updateOrderDetailBy(data);
        return await OrderDetailModel.getOrderDetailByID({ orderdetail_id: data.orderdetail_id });
    },

    async deleteOrderDetailBy(data) {
        return await OrderDetailModel.deleteOrderDetailBy(data);
    }
};

module.exports = OrderDetailService;
