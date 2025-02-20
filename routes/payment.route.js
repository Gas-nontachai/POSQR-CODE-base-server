const express = require('express');
const router = express.Router();
const { PaymentController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generatePaymentID', PaymentController.generatePaymentID);
router.post('/getPaymentBy', PaymentController.getPaymentBy);
router.post('/getPaymentByID', PaymentController.getPaymentByID);
router.post('/insertPayment', PaymentController.insertPayment);
router.post('/updatePaymentBy', PaymentController.updatePaymentBy);
router.post('/deletePaymentBy', PaymentController.deletePaymentBy);

module.exports = router;