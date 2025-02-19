const { UserRoleModel } = require("../models");

const UserRoleService = {
    async generateUserRoleID() {
        const res = await UserRoleModel.generateUserRoleID();
        return res[0].id;
    },

    async getUserRoleBy() {
        return await UserRoleModel.getUserRoleBy();
    },

    async getUserRoleByID(data) {
        const res = await UserRoleModel.getUserRoleByID(data);
        return res[0];
    },

    async insertUserRole(data) {
        data.userrole_id = await UserRoleService.generateUserRoleID(data);
        await UserRoleModel.insertUserRole(data);
        return await UserRoleModel.getUserRoleByID({ userrole_id: data.userrole_id });
    },

    async updateUserRoleBy(data) {
        await UserRoleModel.updateUserRoleBy(data);
        return await UserRoleModel.getUserRoleByID({ userrole_id: data.userrole_id });
    },

    async deleteUserRoleBy(data) {
        return await UserRoleModel.deleteUserRoleBy(data);
    }
};

module.exports = UserRoleService;
