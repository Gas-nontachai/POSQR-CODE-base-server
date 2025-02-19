const express = require('express');
const router = express.Router();
const callLogger = require('../utils/callLogger');
const { PaymentController } = require("../controllers");

router.use(callLogger);

router.post("/generatePaymentID", PaymentController.generatePaymentID);
router.post("/getPaymentBy", PaymentController.getPaymentBy);
router.post("/getPaymentByID", PaymentController.getPaymentByID);
router.post("/updatePaymentBy", PaymentController.updatePaymentBy);
router.post("/insertPayment", PaymentController.insertPayment);
router.post("/deletePaymentBy", PaymentController.deletePaymentBy);

module.exports = router;
