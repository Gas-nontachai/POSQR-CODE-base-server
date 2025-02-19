const { MenuModel } = require("../models");

const MenuService = {
    async generateMenuID() {
        const res = await MenuModel.generateMenuID();
        return res[0].id;
    },

    async getMenuBy() {
        return await MenuModel.getMenuBy();
    },

    async getMenuByID(data) {
        const res = await MenuModel.getMenuByID(data);
        return res[0];
    },

    async insertMenu(data) {
        data.menu_id = await MenuService.generateMenuID(data);
        await MenuModel.insertMenu(data);
        return await MenuModel.getMenuByID({ menu_id: data.menu_id });
    },

    async updateMenuBy(data) {
        await MenuModel.updateMenuBy(data);
        return await MenuModel.getMenuByID({ menu_id: data.menu_id });
    },

    async deleteMenuBy(data) {
        return await MenuModel.deleteMenuBy(data);
    }
};

module.exports = MenuService;
