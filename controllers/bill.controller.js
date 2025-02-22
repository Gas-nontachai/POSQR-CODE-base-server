const { BillService } = require('../services');
const handleRequest = require('../utils/handleRequest');

const getImagePath = (req) => {
    return req.file ? `/bill_img/${req.file.filename}` : null;
};

exports.generateBillID = handleRequest(async () => {
    return await BillService.generateBillID();
});

exports.getBillBy = handleRequest(async (req) => {
    return await BillService.getBillBy(req.body);
});

exports.getBillByID = handleRequest(async (req) => {
    return await BillService.getBillByID(req.body);
});

exports.insertBill = handleRequest(async (req) => {
    return await BillService.insertBill(req.body);
});

exports.updateBillBy = handleRequest(async (req) => {
    const imagePath = getImagePath(req)
    const data = {
        ...req.body,
        bill_img: imagePath
    }
    return await BillService.updateBillBy(data);
});

exports.deleteBillBy = handleRequest(async (req) => {
    return await BillService.deleteBillBy(req.body);
});