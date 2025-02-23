const { TableService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateTableID = handleRequest(async () => {
    return await TableService.generateTableID();
});

exports.getTableBy = handleRequest(async (req) => {
    return await TableService.getTableBy(req.body);
});

exports.getTableByID = handleRequest(async (req) => {
    return await TableService.getTableByID(req.body);
});

exports.insertTable = handleRequest(async (req) => {
    return await TableService.insertTable(req.body);
});

exports.updateTableBy = handleRequest(async (req) => {
    return await TableService.updateTableBy(req.body);
});

exports.deleteTableBy = handleRequest(async (req) => {
    return await TableService.deleteTableBy(req.body);
});