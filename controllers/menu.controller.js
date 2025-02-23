const { MenuService } = require('../services');
const handleRequest = require('../utils/handleRequest');

const getImagePath = (req) => {
    return req.file ? `/menu_img/${req.file.filename}` : null;
};

exports.generateMenuID = handleRequest(async () => {
    return await MenuService.generateMenuID();
});

exports.getMenuBy = handleRequest(async (req) => {
    return await MenuService.getMenuBy(req.body);
});

exports.getMenuByID = handleRequest(async (req) => {
    return await MenuService.getMenuByID(req.body);
});

exports.insertMenu = handleRequest(async (req) => {
    const imagePath = getImagePath(req);
    const data = {
        ...req.body,
        menu_img: imagePath,
    };
    return await MenuService.insertMenu(data);
});

exports.updateMenuBy = handleRequest(async (req) => {
    const imagePath = getImagePath(req);
    const data = {
        ...req.body,
        menu_img: imagePath,
    };
    return await MenuService.updateMenuBy(data);
});

exports.deleteMenuBy = handleRequest(async (req) => {
    return await MenuService.deleteMenuBy(req.body);
});
