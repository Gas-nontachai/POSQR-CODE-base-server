const { PaymentModel } = require("../models");

const PaymentService = {
    async generatePaymentID() {
        const res = await PaymentModel.generatePaymentID();
        return res[0].id;
    },

    async getPaymentBy() {
        return await PaymentModel.getPaymentBy();
    },

    async getPaymentByID(data) {
        const res = await PaymentModel.getPaymentByID(data);
        return res[0];
    },

    async insertPayment(data) {
        data.payment_id = await PaymentService.generatePaymentID(data);
        await PaymentModel.insertPayment(data);
        return await PaymentModel.getPaymentByID({ payment_id: data.payment_id });
    },

    async updatePaymentBy(data) {
        await PaymentModel.updatePaymentBy(data);
        return await PaymentModel.getPaymentByID({ payment_id: data.payment_id });
    },

    async deletePaymentBy(data) {
        return await PaymentModel.deletePaymentBy(data);
    }
};

module.exports = PaymentService;
