const express = require('express');
const router = express.Router();
const callLogger = require('../utils/callLogger');
const { MenuController } = require("../controllers/");

router.use(callLogger);

router.post("/generateMenuID", MenuController.generateMenuID);
router.post("/getMenuBy", MenuController.getMenuBy);
router.post("/getMenuByID", MenuController.getMenuByID);
router.post("/updateMenuBy", MenuController.updateMenuBy);
router.post("/insertMenu", MenuController.insertMenu);
router.post("/deleteMenuBy", MenuController.deleteMenuBy);

module.exports = router;
