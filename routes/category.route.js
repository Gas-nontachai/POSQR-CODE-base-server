const express = require('express');
const router = express.Router();
const { CategoryController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateCategoryID', CategoryController.generateCategoryID);
router.post('/getCategoryBy', CategoryController.getCategoryBy);
router.post('/getCategoryByID', CategoryController.getCategoryByID);
router.post('/insertCategory', CategoryController.insertCategory);
router.post('/updateCategoryBy', CategoryController.updateCategoryBy);
router.post('/deleteCategoryBy', CategoryController.deleteCategoryBy);

module.exports = router;