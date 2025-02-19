const { MenuModel } = require("../models");
const { upload, removeFile } = require('../utils/fileUploader');
const file_path = "menu";

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

    async insertMenu(data, file) {
        let imageUrl = null;

        if (file) {
            const uploadedFile = await new Promise((resolve, reject) => {
                upload.single('image')(data, file, (err) => {
                    if (err) reject(err);
                    resolve(file.path);
                });
            });

            imageUrl = uploadedFile;
        }

        data.menu_id = await MenuService.generateMenuID();
        data.image = `${file_path}/${imageUrl}`;

        await MenuModel.insertMenu(data);

        return await MenuModel.getMenuByID({ menu_id: data.menu_id });
    },

    async updateMenuBy(data, file) {
        let imageUrl = data.image;

        if (file) {
            const uploadedFile = await new Promise((resolve, reject) => {
                upload.single('image')(data, file, (err) => {
                    if (err) reject(err);
                    resolve(file.path);
                });
            });

            imageUrl = uploadedFile;
        }

        data.image = `${file_path}/${imageUrl}`;
        await MenuModel.updateMenuBy(data);
        return await MenuModel.getMenuByID({ menu_id: data.menu_id });
    },

    async deleteMenuBy(data) {
        const menu = await MenuModel.getMenuByID(data);
        const filePath = menu.image;

        if (filePath) {
            await removeFile(filePath);
        }
        await MenuModel.deleteMenuBy(data);
        return { message: 'Menu and file deleted successfully' };
    }
};

module.exports = MenuService;
