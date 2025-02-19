const express = require('express');
const router = express.Router();
const callLogger = require('../utils/callLogger');
const { UserController } = require("../controllers");

router.use(callLogger);

router.post("/generateUserID", UserController.generateUserID);
router.post("/getUserBy", UserController.getUserBy);
router.post("/getUserByID", UserController.getUserByID);
router.post("/updateUserBy", UserController.updateUserBy);
router.post("/insertUser", UserController.insertUser);
router.post("/deleteUserBy", UserController.deleteUserBy);

module.exports = router;
