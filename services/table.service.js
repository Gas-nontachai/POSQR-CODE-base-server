const { TableModel } = require("../models");

const TableService = {
    async generateTableID() {
        const res = await TableModel.generateTableID();
        return res[0].id;
    },

    async getTableBy() {
        return await TableModel.getTableBy();
    },

    async getTableByID(data) {
        const res = await TableModel.getTableByID(data);
        return res[0];
    },

    async insertTable(data) {
        data.table_id = await TableService.generateTableID(data);
        await TableModel.insertTable(data);
        return await TableModel.getTableByID({ table_id: data.table_id });
    },

    async updateTableBy(data) {
        await TableModel.updateTableBy(data);
        return await TableModel.getTableByID({ table_id: data.table_id });
    },

    async deleteTableBy(data) {
        return await TableModel.deleteTableBy(data);
    }
};

module.exports = TableService;
