const { UserModel } = require("../models");

const UserService = {
    async generateUserID() {
        const res = await UserModel.generateUserID();
        return res[0].id;
    },

    async getUserBy() {
        return await UserModel.getUserBy();
    },

    async getUserByID(data) {
        const res = await UserModel.getUserByID(data);
        return res[0];
    },

    async insertUser(data) {
        data.user_id = await UserService.generateUserID(data);
        await UserModel.insertUser(data);
        return await UserModel.getUserByID({ user_id: data.user_id });
    },

    async updateUserBy(data) {
        await UserModel.updateUserBy(data);
        return await UserModel.getUserByID({ user_id: data.user_id });
    },

    async deleteUserBy(data) {
        return await UserModel.deleteUserBy(data);
    }
};

module.exports = UserService;
