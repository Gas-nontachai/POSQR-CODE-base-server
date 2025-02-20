const express = require('express');
const router = express.Router();
const { QrCodeController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateQrCodeID', QrCodeController.generateQrCodeID);
router.post('/getQrCodeBy', QrCodeController.getQrCodeBy);
router.post('/getQrCodeByID', QrCodeController.getQrCodeByID);
router.post('/insertQrCode', QrCodeController.insertQrCode);
router.post('/updateQrCodeBy', QrCodeController.updateQrCodeBy);
router.post('/deleteQrCodeBy', QrCodeController.deleteQrCodeBy);

module.exports = router;