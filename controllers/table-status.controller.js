const { TableStatusService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateTableStatusID = handleRequest(async () => {
    return await TableStatusService.generateTableStatusID();
});

exports.getTableStatusBy = handleRequest(async () => {
    return await TableStatusService.getTableStatusBy();
});

exports.getTableStatusByID = handleRequest(async (req) => {
    return await TableStatusService.getTableStatusByID(req.body);
});

exports.insertTableStatus = handleRequest(async (req) => {
    return await TableStatusService.insertTableStatus(req.body);
});

exports.updateTableStatusBy = handleRequest(async (req) => {
    return await TableStatusService.updateTableStatusBy(req.body);
});

exports.deleteTableStatusBy = handleRequest(async (req) => {
    return await TableStatusService.deleteTableStatusBy(req.body);
});