const { UserRoleModel } = require('../models');

const moment = require('moment');

const generateUserRoleID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestUserRole = await UserRoleModel.findOne().sort({ _id: -1 });

    const lastSequence = latestUserRole ? parseInt(latestUserRole.user_role_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newUserRoleID = `UR${today}-${sequence}`;
    while (await UserRoleModel.exists({ user_role_id: newUserRoleID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newUserRoleID = `UR${today}-${sequence}`;
    }
    return newUserRoleID;
};

const getUserRoleBy = async (data) => {
    return await UserRoleModel.find(data);
};

const getUserRoleByID = async (data) => {
    const res = await UserRoleModel.find({ user_role_id: data.user_role_id });
    return res[0]
};

const insertUserRole = async (data) => {
    data.user_role_id = await generateUserRoleID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await UserRoleModel.create(data);
};

const updateUserRoleBy = async (data) => {
    return await UserRoleModel.findOneAndUpdate(
        { user_role_id: data.user_role_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};


const deleteUserRoleBy = async (data) => {
    return await UserRoleModel.findOneAndDelete({ user_role_id: data.user_role_id });
};

module.exports = { generateUserRoleID, getUserRoleBy, getUserRoleByID, insertUserRole, updateUserRoleBy, deleteUserRoleBy };