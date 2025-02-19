const { PaymentService } = require("../services");
const handleRequest = require("../utils/handleRequest");

const PaymentController = {
    generatePaymentID: handleRequest(async (req) => {
        return await PaymentService.generatePaymentID();
    }),

    getPaymentBy: handleRequest(async (req) => {
        return await PaymentService.getPaymentBy(req.body);
    }),

    getPaymentByID: handleRequest(async (req) => {
        return await PaymentService.getPaymentByID(req.body);
    }),

    insertPayment: handleRequest(async (req) => {
        return await PaymentService.insertPayment(req.body);
    }),

    updatePaymentBy: handleRequest(async (req) => {
        return await PaymentService.updatePaymentBy(req.body);
    }),

    deletePaymentBy: handleRequest(async (req) => {
        return await PaymentService.deletePaymentBy(req.body);
    }),
};

module.exports = PaymentController;
