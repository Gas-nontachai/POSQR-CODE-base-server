const { CategoryService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateCategoryID = handleRequest(async () => {
    return await CategoryService.generateCategoryID();
});

exports.getCategoryBy = handleRequest(async (req) => {
    return await CategoryService.getCategoryBy(req.body);
});

exports.getCategoryByID = handleRequest(async (req) => {
    return await CategoryService.getCategoryByID(req.body);
});

exports.insertCategory = handleRequest(async (req) => {
    return await CategoryService.insertCategory(req.body);
});

exports.updateCategoryBy = handleRequest(async (req) => {
    return await CategoryService.updateCategoryBy(req.body);
});

exports.deleteCategoryBy = handleRequest(async (req) => {
    return await CategoryService.deleteCategoryBy(req.body);
});