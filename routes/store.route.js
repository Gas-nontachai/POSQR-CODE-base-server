const express = require('express');
const router = express.Router();
const { StoreController } = require('../controllers');
const callLogger = require('../utils/callLogger');
const { uploadSingle } = require("../utils/upload");

const path = 'store_img'

router.use(callLogger);
router.post('/generateStoreID', StoreController.generateStoreID);
router.post('/getStoreBy', StoreController.getStoreBy);
router.post('/getStoreByID', StoreController.getStoreByID);
router.post('/insertStore', StoreController.insertStore);
router.post('/updateStoreBy', uploadSingle(path), StoreController.updateStoreBy);
router.post('/deleteStoreBy', StoreController.deleteStoreBy);

module.exports = router;