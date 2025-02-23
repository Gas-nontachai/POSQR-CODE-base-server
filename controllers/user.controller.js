const { UserService } = require('../services');
const handleRequest = require('../utils/handleRequest');

const getImagePath = (req) => {
    return req.file ? `/user_img/${req.file.filename}` : null;
};

exports.generateUserID = handleRequest(async () => {
    return await UserService.generateUserID();
});

exports.getUserBy = handleRequest(async (req) => {
    return await UserService.getUserBy(req.body);
});

exports.getUserByID = handleRequest(async (req) => {
    return await UserService.getUserByID(req.body);
});

exports.insertUser = handleRequest(async (req) => {
    const imagePath = getImagePath(req)
    const data = {
        ...req.body,
        user_img: imagePath
    }

    console.log(req.body);
    console.log("data", data);

    // return await UserService.insertUser(data);
});

exports.updateUserBy = handleRequest(async (req) => {
    const imagePath = getImagePath(req)
    const data = {
        ...req.body,
        user_img: imagePath
    }
    return await UserService.updateUserBy(data);
});

exports.deleteUserBy = handleRequest(async (req) => {
    return await UserService.deleteUserBy(req.body);
});