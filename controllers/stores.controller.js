const { StoresService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateStoresID = handleRequest(async () => {
    return await StoresService.generateStoresID();
});

exports.getStoresBy = handleRequest(async (req) => {
    return await StoresService.getStoresBy(req.body);
});

exports.getStoresByID = handleRequest(async (req) => {
    return await StoresService.getStoresByID(req.body);
});

exports.insertStores = handleRequest(async (req) => {
    return await StoresService.insertStores(req.body);
});

exports.updateStoresBy = handleRequest(async (req) => {
    return await StoresService.updateStoresBy(req.body);
});

exports.deleteStoresBy = handleRequest(async (req) => {
    return await StoresService.deleteStoresBy(req.body);
});