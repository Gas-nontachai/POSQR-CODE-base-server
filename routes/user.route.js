const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateUserID', UserController.generateUserID);
router.post('/getUserBy', UserController.getUserBy);
router.post('/getUserByID', UserController.getUserByID);
router.post('/insertUser', UserController.insertUser);
router.post('/updateUserBy', UserController.updateUserBy);
router.post('/deleteUserBy', UserController.deleteUserBy);

module.exports = router;
