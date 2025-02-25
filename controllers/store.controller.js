const { StoreService } = require('../services');
const handleRequest = require('../utils/handleRequest');
const { removeFile } = require("../utils/upload");

const getImagePath = (req) => {
    return req.file ? `/store_img/${req.file.filename}` : null;
};

exports.generateStoreID = handleRequest(async () => {
    return await StoreService.generateStoreID();
});

exports.getStoreBy = handleRequest(async (req) => {
    return await StoreService.getStoreBy(req.body);
});

exports.getStoreByID = handleRequest(async (req) => {
    return await StoreService.getStoreByID(req.body);
});

exports.insertStore = handleRequest(async (req) => {
    return await StoreService.insertStore(req.body);
});

exports.updateStoreBy = handleRequest(async (req) => {
    const ImagePath = getImagePath(req)
    const oldStore = await StoreService.getStoreByID(req.body);

    if (oldStore && oldStore.store_img) {
        const oldImagePath = oldStore.store_img
        removeFile(oldImagePath)
    }
    const data = {
        ...req.body,
        store_img: ImagePath,
    };
    return await StoreService.updateStoreBy(data);
});

exports.deleteStoreBy = handleRequest(async (req) => {
    return await StoreService.deleteStoreBy(req.body);
});