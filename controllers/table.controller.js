const { TableService } = require("../services");
const handleRequest = require("../utils/handleRequest");

const TableController = {
    generateTableID: handleRequest(async (req) => {
        return await TableService.generateTableID();
    }),

    getTableBy: handleRequest(async (req) => {
        return await TableService.getTableBy(req.body);
    }),

    getTableByID: handleRequest(async (req) => {
        return await TableService.getTableByID(req.body);
    }),

    insertTable: handleRequest(async (req) => {
        return await TableService.insertTable(req.body);
    }),

    updateTableBy: handleRequest(async (req) => {
        return await TableService.updateTableBy(req.body);
    }),

    deleteTableBy: handleRequest(async (req) => {
        return await TableService.deleteTableBy(req.body);
    }),
};

module.exports = TableController;
