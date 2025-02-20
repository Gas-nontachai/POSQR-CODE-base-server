const { UserModel } = require('../models');

const moment = require('moment');

const generateUserID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const count = await UserModel.countDocuments();
    const sequence = String(count + 1).padStart(digits, '0');
    return `U${today}-${sequence}`;
};

const getUserBy = async () => {
    return await UserModel.find();
};

const getUserByID = async (data) => {
    return await UserModel.find({ user_id: data.user_id });
};

const insertUser = async (data) => {
    data.user_id = await generateUserID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await UserModel.create(data);
};

const updateUserBy = async (data) => {
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }

    return await UserModel.findOneAndUpdate(
        { user_id: data.user_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};


const deleteUserBy = async (data) => {
    return await UserModel.findOneAndDelete({ user_id: data.user_id });
};

module.exports = { generateUserID, getUserBy, getUserByID, insertUser, updateUserBy, deleteUserBy };
