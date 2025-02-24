const express = require("express");
const router = express.Router();
const { MenuController } = require("../controllers");
const { uploadSingle } = require("../utils/upload");
const callLogger = require("../utils/callLogger");

router.use(callLogger);
const path = 'menu_img'

router.post("/generateMenuID", MenuController.generateMenuID);
router.post("/getMenuBy", MenuController.getMenuBy);
router.post("/getMenuByID", MenuController.getMenuByID);
router.post("/insertMenu", uploadSingle(path), MenuController.insertMenu);
router.post("/updateMenuBy", uploadSingle(path), MenuController.updateMenuBy);
router.post("/deleteMenuBy", uploadSingle(path), MenuController.deleteMenuBy);

module.exports = router;
