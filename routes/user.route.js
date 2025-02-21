const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers');
const { uploadSingle } = require("../utils/upload");
const callLogger = require('../utils/callLogger');

router.use(callLogger);
const path = 'user_img'

router.post('/generateUserID', UserController.generateUserID);
router.post('/getUserBy', UserController.getUserBy);
router.post('/getUserByID', UserController.getUserByID);
router.post('/insertUser', uploadSingle(path), UserController.insertUser);
router.post('/updateUserBy', uploadSingle(path), UserController.updateUserBy);
router.post('/deleteUserBy', UserController.deleteUserBy);

module.exports = router;