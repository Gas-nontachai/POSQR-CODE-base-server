const { TableStatusModel } = require('../models');

const moment = require('moment');

const generateTableStatusID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestTableStatus = await TableStatusModel.findOne().sort({ _id: -1 });

    const lastSequence = latestTableStatus ? parseInt(latestTableStatus.table_status_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newTableStatusID = `TS${today}-${sequence}`;
    while (await TableStatusModel.exists({ table_status_id: newTableStatusID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newTableStatusID = `TS${today}-${sequence}`;
    }
    return newTableStatusID;
};

const getTableStatusBy = async () => {
    return await TableStatusModel.find();
};

const getTableStatusByID = async (data) => {
    const res = await TableStatusModel.find({ table_status_id: data.table_status_id });
    return res[0]
};

const insertTableStatus = async (data) => {
    data.table_status_id = await generateTableStatusID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await TableStatusModel.create(data);
};

const updateTableStatusBy = async (data) => {
    return await TableStatusModel.findOneAndUpdate(
        { table_status_id: data.table_status_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteTableStatusBy = async (data) => {
    return await TableStatusModel.findOneAndDelete({ table_status_id: data.table_status_id });
};

module.exports = { generateTableStatusID, getTableStatusBy, getTableStatusByID, insertTableStatus, updateTableStatusBy, deleteTableStatusBy };