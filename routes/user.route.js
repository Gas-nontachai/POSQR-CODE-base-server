const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.get('/generateUserID', UserController.generateUserID);
router.get('/getUserBy', UserController.getUserBy);
router.get('/getUserByID', UserController.getUserByID);
router.post('/insertUser', UserController.insertUser);
router.put('/updateUserBy', UserController.updateUserBy);
router.delete('/deleteUserBy', UserController.deleteUserBy);

module.exports = router;
