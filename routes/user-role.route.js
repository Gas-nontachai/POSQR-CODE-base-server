const express = require('express');
const router = express.Router();
const { UserRoleController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateUserRoleID', UserRoleController.generateUserRoleID);
router.post('/getUserRoleBy', UserRoleController.getUserRoleBy);
router.post('/getUserRoleByID', UserRoleController.getUserRoleByID);
router.post('/insertUserRole', UserRoleController.insertUserRole);
router.post('/updateUserRoleBy', UserRoleController.updateUserRoleBy);
router.post('/deleteUserRoleBy', UserRoleController.deleteUserRoleBy);

module.exports = router;