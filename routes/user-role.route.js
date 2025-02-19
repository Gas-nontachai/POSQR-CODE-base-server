const express = require('express');
const router = express.Router();
const callLogger = require('../utils/callLogger');
const { UserRoleController } = require("../controllers");

router.use(callLogger);

router.post("/generateUserRoleID", UserRoleController.generateUserRoleID);
router.post("/getUserRoleBy", UserRoleController.getUserRoleBy);
router.post("/getUserRoleByID", UserRoleController.getUserRoleByID);
router.post("/updateUserRoleBy", UserRoleController.updateUserRoleBy);
router.post("/insertUserRole", UserRoleController.insertUserRole);
router.post("/deleteUserRoleBy", UserRoleController.deleteUserRoleBy);

module.exports = router;
