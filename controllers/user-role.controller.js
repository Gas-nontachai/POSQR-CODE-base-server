const { UserRoleService } = require("../services");
const handleRequest = require("../utils/handleRequest");

const UserRoleController = {
    generateUserRoleID: handleRequest(async (req) => {
        return await UserRoleService.generateUserRoleID();
    }),

    getUserRoleBy: handleRequest(async (req) => {
        return await UserRoleService.getUserRoleBy(req.body);
    }),

    getUserRoleByID: handleRequest(async (req) => {
        return await UserRoleService.getUserRoleByID(req.body);
    }),

    insertUserRole: handleRequest(async (req) => {
        return await UserRoleService.insertUserRole(req.body);
    }),

    updateUserRoleBy: handleRequest(async (req) => {
        return await UserRoleService.updateUserRoleBy(req.body);
    }),

    deleteUserRoleBy: handleRequest(async (req) => {
        return await UserRoleService.deleteUserRoleBy(req.body);
    }),
};

module.exports = UserRoleController;
