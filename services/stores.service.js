const { StoresModel } = require('../models');

const moment = require('moment');

const generateStoresID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestStores = await StoresModel.findOne().sort({ _id: -1 });

    const lastSequence = latestStores ? parseInt(latestStores.stores_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newStoresID = `ST${today}-${sequence}`;
    while (await StoresModel.exists({ stores_id: newStoresID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newStoresID = `ST${today}-${sequence}`;
    }
    return newStoresID;
};

const getStoresBy = async (data) => {
    return await StoresModel.find(data);
};

const getStoresByID = async (data) => {
    const res = await StoresModel.find({ stores_id: data.stores_id });
    return res[0]
};

const insertStores = async (data) => {
    data.stores_id = await generateStoresID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await StoresModel.create(data);
};

const updateStoresBy = async (data) => {
    return await StoresModel.findOneAndUpdate(
        { stores_id: data.stores_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteStoresBy = async (data) => {
    return await StoresModel.findOneAndDelete({ stores_id: data.stores_id });
};

module.exports = { generateStoresID, getStoresBy, getStoresByID, insertStores, updateStoresBy, deleteStoresBy };