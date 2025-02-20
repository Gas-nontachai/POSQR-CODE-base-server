const express = require('express');
const router = express.Router();
const { MenuController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateMenuID', MenuController.generateMenuID);
router.post('/getMenuBy', MenuController.getMenuBy);
router.post('/getMenuByID', MenuController.getMenuByID);
router.post('/insertMenu', MenuController.insertMenu);
router.post('/updateMenuBy', MenuController.updateMenuBy);
router.post('/deleteMenuBy', MenuController.deleteMenuBy);

module.exports = router;