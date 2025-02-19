const { CategoryService } = require("../services");
const handleRequest = require("../utils/handleRequest");

const CategoryController = {
    generateCategoryID: handleRequest(async (req) => {
        return await CategoryService.generateCategoryID();
    }),

    getCategoryBy: handleRequest(async (req) => {
        return await CategoryService.getCategoryBy(req.body);
    }),

    getCategoryByID: handleRequest(async (req) => {
        return await CategoryService.getCategoryByID(req.body);
    }),

    insertCategory: handleRequest(async (req) => {
        return await CategoryService.insertCategory(req.body);
    }),

    updateCategoryBy: handleRequest(async (req) => {
        return await CategoryService.updateCategoryBy(req.body);
    }),

    deleteCategoryBy: handleRequest(async (req) => {
        return await CategoryService.deleteCategoryBy(req.body);
    }),
};

module.exports = CategoryController;
