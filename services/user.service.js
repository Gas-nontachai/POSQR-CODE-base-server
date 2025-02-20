const { UserModel } = require('../models');

const moment = require('moment');

const generateUserID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestUser = await UserModel.findOne().sort({ _id: -1 });

    const lastSequence = latestUser ? parseInt(latestUser.user_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newUserID = `U${today}-${sequence}`;
    while (await UserModel.exists({ user_id: newUserID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newUserID = `U${today}-${sequence}`;
    }
    return newUserID;
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