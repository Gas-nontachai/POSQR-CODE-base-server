const CategoryModel = require("../models/category.model");

const CategoryService = {
    async generateCategoryID() {
        return await CategoryModel.generateCategoryID();
    },

    async getCategoryBy(data) {
        return await CategoryModel.getCategoryBy(data);
    },

    async getCategoryByID(data) {
        return await CategoryModel.getCategoryByID(data);
    },

    async insertCategory(data) {
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
