const { TableModel } = require('../models');

const moment = require('moment');

const generateTableID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestTable = await TableModel.findOne().sort({ _id: -1 });

    const lastSequence = latestTable ? parseInt(latestTable.table_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newTableID = `T${today}-${sequence}`;
    while (await TableModel.exists({ table_id: newTableID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newTableID = `T${today}-${sequence}`;
    }
    return newTableID;
};

const getTableBy = async (data) => {
    return await TableModel.find(data);
};

const getTableByID = async (data) => {
    const res = await TableModel.find({ table_id: data.table_id });
    return res[0]
};

const insertTable = async (data) => {
    data.table_id = await generateTableID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await TableModel.create(data);
};

const updateTableBy = async (data) => {
    return await TableModel.findOneAndUpdate(
        { table_id: data.table_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteTableBy = async (data) => {
    return await TableModel.findOneAndDelete({ table_id: data.table_id });
};

module.exports = { generateTableID, getTableBy, getTableByID, insertTable, updateTableBy, deleteTableBy };