const { MenuService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateMenuID = handleRequest(async () => {
    return await MenuService.generateMenuID();
});

exports.getMenuBy = handleRequest(async () => {
    return await MenuService.getMenuBy();
});

exports.getMenuByID = handleRequest(async (req) => {
    return await MenuService.getMenuByID(req.body);
});

exports.insertMenu = handleRequest(async (req) => {
    return await MenuService.insertMenu(req.body);
});

exports.updateMenuBy = handleRequest(async (req) => {
    return await MenuService.updateMenuBy(req.body);
});

exports.deleteMenuBy = handleRequest(async (req) => {
    return await MenuService.deleteMenuBy(req.body);
});