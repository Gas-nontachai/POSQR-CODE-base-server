const { MenuModel } = require('../models');
const moment = require('moment');
const { removeFile } = require("../utils/upload");

const generateMenuID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestMenu = await MenuModel.findOne().sort({ _id: -1 });

    const lastSequence = latestMenu ? parseInt(latestMenu.menu_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newMenuID = `U${today}-${sequence}`;
    while (await MenuModel.exists({ menu_id: newMenuID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newMenuID = `U${today}-${sequence}`;
    }
    return newMenuID;
};

const getMenuBy = async (data) => {
    return await MenuModel.find(data);
};

const getMenuByID = async (data) => {
    const res = await MenuModel.find({ menu_id: data.menu_id });
    return res[0]
};

const insertMenu = async (data) => {
    data.menu_id = await generateMenuID()

    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }

    if (data.menu_img) {
        data.menu_img = data.menu_img;
    }

    return await MenuModel.create(data);
};

const updateMenuBy = async (data) => {
    if (data.menu_img) {
        data.menu_img = data.menu_img;
    }

    return await MenuModel.findOneAndUpdate(
        { menu_id: data.menu_id },
        { $set: data },
        { new: true, runValidators: true }
    );
    removeFile();
};

const deleteMenuBy = async (data) => {
    return await MenuModel.findOneAndDelete({ menu_id: data.menu_id });
};

module.exports = { generateMenuID, getMenuBy, getMenuByID, insertMenu, updateMenuBy, deleteMenuBy };
