const express = require('express');
const router = express.Router();
const callLogger = require('../utils/callLogger');
const { TableController } = require("../controllers");

router.use(callLogger);

router.post("/generateTableID", TableController.generateTableID);
router.post("/getTableBy", TableController.getTableBy);
router.post("/getTableByID", TableController.getTableByID);
router.post("/updateTableBy", TableController.updateTableBy);
router.post("/insertTable", TableController.insertTable);
router.post("/deleteTableBy", TableController.deleteTableBy);

module.exports = router;
