const express = require('express');
const router = express.Router();
const callLogger = require('../utils/callLogger');
const { CategoryController } = require("../controllers");

router.use(callLogger);

router.post("/generateCategoryID", CategoryController.generateCategoryID);
router.post("/getCategoryBy", CategoryController.getCategoryBy);
router.post("/getCategoryByID", CategoryController.getCategoryByID);
router.post("/updateCategoryBy", CategoryController.updateCategoryBy);
router.post("/insertCategory", CategoryController.insertCategory);
router.post("/deleteCategoryBy", CategoryController.deleteCategoryBy);

module.exports = router;
