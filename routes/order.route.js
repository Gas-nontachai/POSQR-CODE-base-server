const express = require('express');
const router = express.Router();
const callLogger = require('../utils/callLogger');
const { OrderController } = require("../controllers");

router.use(callLogger);

router.post("/generateOrderID", OrderController.generateOrderID);
router.post("/getOrderBy", OrderController.getOrderBy);
router.post("/getOrderByID", OrderController.getOrderByID);
router.post("/updateOrderBy", OrderController.updateOrderBy);
router.post("/insertOrder", OrderController.insertOrder);
router.post("/deleteOrderBy", OrderController.deleteOrderBy);

module.exports = router;
