const { PaymentService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generatePaymentID = handleRequest(async () => {
    return await PaymentService.generatePaymentID();
});

exports.getPaymentBy = handleRequest(async () => {
    return await PaymentService.getPaymentBy();
});

exports.getPaymentByID = handleRequest(async (req) => {
    return await PaymentService.getPaymentByID(req.body);
});

exports.insertPayment = handleRequest(async (req) => {
    return await PaymentService.insertPayment(req.body);
});

exports.updatePaymentBy = handleRequest(async (req) => {
    return await PaymentService.updatePaymentBy(req.body);
});

exports.deletePaymentBy = handleRequest(async (req) => {
    return await PaymentService.deletePaymentBy(req.body);
});