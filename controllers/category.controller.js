const CategoryService = require("../services/category.service");

const CategoryController = {
    async generateCategoryID(req, res) {
        try {
            const result = await CategoryService.generateCategoryID();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getCategoryBy(req, res) {
        try {
            const result = await CategoryService.getCategoryBy(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getCategoryByID(req, res) {
        try {
            const result = await CategoryService.getCategoryByID(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: "Category not found" });
        }
    },

    async insertCategory(req, res) {
        try {
            const result = await CategoryService.insertCategory(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateCategoryBy(req, res) {
        try {
            const result = await CategoryService.updateCategoryBy(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteCategoryBy(req, res) {
        try {
            await CategoryService.deleteCategoryBy(req.body);
            res.status(200).json({ message: "Category deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = CategoryController;
