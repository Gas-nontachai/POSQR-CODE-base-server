const express = require('express');
const router = express.Router();
const { OrderDetailController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateOrderDetailID', OrderDetailController.generateOrderDetailID);
router.post('/getOrderDetailBy', OrderDetailController.getOrderDetailBy);
router.post('/getOrderDetailByID', OrderDetailController.getOrderDetailByID);
router.post('/insertOrderDetail', OrderDetailController.insertOrderDetail);
router.post('/updateOrderDetailBy', OrderDetailController.updateOrderDetailBy);
router.post('/deleteOrderDetailBy', OrderDetailController.deleteOrderDetailBy);

module.exports = router;