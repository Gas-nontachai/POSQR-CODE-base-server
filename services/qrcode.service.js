const { QrCodeModel } = require('../models');

const moment = require('moment');

const generateQrCodeID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestQrCode = await QrCodeModel.findOne().sort({ _id: -1 });

    const lastSequence = latestQrCode ? parseInt(latestQrCode.qrcode_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newQrCodeID = `QR${today}-${sequence}`;
    while (await QrCodeModel.exists({ qrcode_id: newQrCodeID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newQrCodeID = `QR${today}-${sequence}`;
    }
    return newQrCodeID;
};

const getQrCodeBy = async () => {
    return await QrCodeModel.find();
};

const getQrCodeByID = async (data) => {
    const res = await QrCodeModel.find({ qrcode_id: data.qrcode_id });
    return res[0]
};

const insertQrCode = async (data) => {
    data.qrcode_id = await generateQrCodeID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await QrCodeModel.create(data);
};

const updateQrCodeBy = async (data) => {
    return await QrCodeModel.findOneAndUpdate(
        { qrcode_id: data.qrcode_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteQrCodeBy = async (data) => {
    return await QrCodeModel.findOneAndDelete({ qrcode_id: data.qrcode_id });
};

module.exports = { generateQrCodeID, getQrCodeBy, getQrCodeByID, insertQrCode, updateQrCodeBy, deleteQrCodeBy };