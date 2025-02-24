const { MenuService } = require('../services');
const handleRequest = require('../utils/handleRequest');
const { removeFile } = require("../utils/upload");

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
    const oldMenu = await MenuService.getMenuByID(req.body);    
    
    if (oldMenu && oldMenu.menu_img) {
        const oldImagePath = oldMenu.menu_img;  
        removeFile(oldImagePath);
    } 
    const data = {
        ...req.body,
        menu_img: imagePath,
    };  
    return await MenuService.updateMenuBy(data);
});


exports.deleteMenuBy = handleRequest(async (req) => {
    const menuID = req.body.menu_id; 
    const oldMenu = await MenuService.getMenuByID({ menu_id: menuID }); 
    if (oldMenu && oldMenu.menu_img) {
        const oldImagePath = oldMenu.menu_img;
        removeFile(oldImagePath);
    } 
    return await MenuService.deleteMenuBy(req.body);
});
