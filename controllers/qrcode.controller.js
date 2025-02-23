const { QrCodeService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateQrCodeID = handleRequest(async () => {
    return await QrCodeService.generateQrCodeID();
});

exports.getQrCodeBy = handleRequest(async (req) => {
    return await QrCodeService.getQrCodeBy(req.body);
});

exports.getQrCodeByID = handleRequest(async (req) => {
    return await QrCodeService.getQrCodeByID(req.body);
});

exports.insertQrCode = handleRequest(async (req) => {
    return await QrCodeService.insertQrCode(req.body);
});

exports.updateQrCodeBy = handleRequest(async (req) => {
    return await QrCodeService.updateQrCodeBy(req.body);
});

exports.deleteQrCodeBy = handleRequest(async (req) => {
    return await QrCodeService.deleteQrCodeBy(req.body);
});