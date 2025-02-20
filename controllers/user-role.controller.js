const { UserRoleService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateUserRoleID = handleRequest(async () => {
    return await UserRoleService.generateUserRoleID();
});

exports.getUserRoleBy = handleRequest(async () => {
    return await UserRoleService.getUserRoleBy();
});

exports.getUserRoleByID = handleRequest(async (req) => {
    return await UserRoleService.getUserRoleByID(req.body);
});

exports.insertUserRole = handleRequest(async (req) => {
    return await UserRoleService.insertUserRole(req.body);
});

exports.updateUserRoleBy = handleRequest(async (req) => {
    return await UserRoleService.updateUserRoleBy(req.body);
});

exports.deleteUserRoleBy = handleRequest(async (req) => {
    return await UserRoleService.deleteUserRoleBy(req.body);
});