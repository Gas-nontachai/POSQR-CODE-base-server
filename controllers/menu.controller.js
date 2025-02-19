const { MenuService } = require("../services");
const handleRequest = require("../utils/handleRequest");

const MenuController = {
    generateMenuID: handleRequest(async (req) => {
        return await MenuService.generateMenuID();
    }),

    getMenuBy: handleRequest(async (req) => {
        return await MenuService.getMenuBy(req.body);
    }),

    getMenuByID: handleRequest(async (req) => {
        return await MenuService.getMenuByID(req.body);
    }),

    insertMenu: handleRequest(async (req) => {
        return await MenuService.insertMenu(req.body);
    }),

    updateMenuBy: handleRequest(async (req) => {
        return await MenuService.updateMenuBy(req.body);
    }),

    deleteMenuBy: handleRequest(async (req) => {
        return await MenuService.deleteMenuBy(req.body);
    }),
};

module.exports = MenuController;
