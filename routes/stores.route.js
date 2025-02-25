const express = require('express');
const router = express.Router();
const { StoresController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateStoresID', StoresController.generateStoresID);
router.post('/getStoresBy', StoresController.getStoresBy);
router.post('/getStoresByID', StoresController.getStoresByID);
router.post('/insertStores', StoresController.insertStores);
router.post('/updateStoresBy', StoresController.updateStoresBy);
router.post('/deleteStoresBy', StoresController.deleteStoresBy);

module.exports = router;