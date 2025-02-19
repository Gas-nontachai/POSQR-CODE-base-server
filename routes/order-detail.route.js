const express = require('express');
const router = express.Router();
const callLogger = require('../utils/callLogger');
const { OrderDetailController } = require("../controllers");

router.use(callLogger);

router.post("/generateOrderDetailID", OrderDetailController.generateOrderDetailID);
router.post("/getOrderDetailBy", OrderDetailController.getOrderDetailBy);
router.post("/getOrderDetailByID", OrderDetailController.getOrderDetailByID);
router.post("/updateOrderDetailBy", OrderDetailController.updateOrderDetailBy);
router.post("/insertOrderDetail", OrderDetailController.insertOrderDetail);
router.post("/deleteOrderDetailBy", OrderDetailController.deleteOrderDetailBy);

module.exports = router;
