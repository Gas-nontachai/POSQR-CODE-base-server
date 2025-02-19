const { CategoryModel } = require("../models/");

const CategoryService = {
    async generateCategoryID() {
        const res = await CategoryModel.generateCategoryID();
        return res[0].id;
    },

    async getCategoryBy() {
        return await CategoryModel.getCategoryBy();
    },

    async getCategoryByID(data) {
        const res = await CategoryModel.getCategoryByID(data);
        return res[0];
    },

    async insertCategory(data) {
        data.category_id = await CategoryService.generateCategoryID(data);
        await CategoryModel.insertCategory(data);
        return await CategoryModel.getCategoryByID({ category_id: data.category_id });
    },

    async updateCategoryBy(data) {
        await CategoryModel.updateCategoryBy(data);
        return await CategoryModel.getCategoryByID({ category_id: data.category_id });
    },

    async deleteCategoryBy(data) {
        return await CategoryModel.deleteCategoryBy(data);
    }
};

module.exports = CategoryService;
