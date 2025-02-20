const express = require('express');
const router = express.Router();
const { TableController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateTableID', TableController.generateTableID);
router.post('/getTableBy', TableController.getTableBy);
router.post('/getTableByID', TableController.getTableByID);
router.post('/insertTable', TableController.insertTable);
router.post('/updateTableBy', TableController.updateTableBy);
router.post('/deleteTableBy', TableController.deleteTableBy);

module.exports = router;