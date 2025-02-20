const express = require('express');
const router = express.Router();
const { TableStatusController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateTableStatusID', TableStatusController.generateTableStatusID);
router.post('/getTableStatusBy', TableStatusController.getTableStatusBy);
router.post('/getTableStatusByID', TableStatusController.getTableStatusByID);
router.post('/insertTableStatus', TableStatusController.insertTableStatus);
router.post('/updateTableStatusBy', TableStatusController.updateTableStatusBy);
router.post('/deleteTableStatusBy', TableStatusController.deleteTableStatusBy);

module.exports = router;