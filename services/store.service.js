const { StoreModel } = require('../models');

const moment = require('moment');

const generateStoreID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestStore = await StoreModel.findOne().sort({ _id: -1 });

    const lastSequence = latestStore ? parseInt(latestStore.store_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newStoreID = `ST${today}-${sequence}`;
    while (await StoreModel.exists({ store_id: newStoreID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newStoreID = `ST${today}-${sequence}`;
    }
    return newStoreID;
};

const getStoreBy = async (data) => {
    return await StoreModel.find(data);
};

const getStoreByID = async (data) => {
    const res = await StoreModel.find({ store_id: data.store_id });
    return res[0]
};

const insertStore = async (data) => {
    data.store_id = await generateStoreID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await StoreModel.create(data);
};

const updateStoreBy = async (data) => {
    return await StoreModel.findOneAndUpdate(
        { store_id: data.store_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteStoreBy = async (data) => {
    return await StoreModel.findOneAndDelete({ store_id: data.store_id });
};

module.exports = { generateStoreID, getStoreBy, getStoreByID, insertStore, updateStoreBy, deleteStoreBy };