const express = require('express');
const router = express.Router();
const { BillController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateBillID', BillController.generateBillID);
router.post('/getBillBy', BillController.getBillBy);
router.post('/getBillByID', BillController.getBillByID);
router.post('/insertBill', BillController.insertBill);
router.post('/updateBillBy', BillController.updateBillBy);
router.post('/deleteBillBy', BillController.deleteBillBy);

module.exports = router;