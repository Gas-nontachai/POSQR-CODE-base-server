const { UserService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateUserID = handleRequest(async () => {
    return await UserService.generateUserID();
});

exports.getUserBy = handleRequest(async () => {
    return await UserService.getUserBy();
});

exports.getUserByID = handleRequest(async (req) => {
    return await UserService.getUserByID(req.body);
});

exports.insertUser = handleRequest(async (req) => {
    return await UserService.insertUser(req.body);
});

exports.updateUserBy = handleRequest(async (req) => {
    return await UserService.updateUserBy(req.body);
});

exports.deleteUserBy = handleRequest(async (req) => {
    return await UserService.deleteUserBy(req.body);
});
