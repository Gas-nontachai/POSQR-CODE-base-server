const { UserService } = require("../services");
const handleRequest = require("../utils/handleRequest");

const UserController = {
    generateUserID: handleRequest(async (req) => {
        return await UserService.generateUserID();
    }),

    getUserBy: handleRequest(async (req) => {
        return await UserService.getUserBy(req.body);
    }),

    getUserByID: handleRequest(async (req) => {
        return await UserService.getUserByID(req.body);
    }),

    insertUser: handleRequest(async (req) => {
        return await UserService.insertUser(req.body);
    }),

    updateUserBy: handleRequest(async (req) => {
        return await UserService.updateUserBy(req.body);
    }),

    deleteUserBy: handleRequest(async (req) => {
        return await UserService.deleteUserBy(req.body);
    }),
};

module.exports = UserController;
