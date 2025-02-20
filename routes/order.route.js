const express = require('express');
const router = express.Router();
const { OrderController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateOrderID', OrderController.generateOrderID);
router.post('/getOrderBy', OrderController.getOrderBy);
router.post('/getOrderByID', OrderController.getOrderByID);
router.post('/insertOrder', OrderController.insertOrder);
router.post('/updateOrderBy', OrderController.updateOrderBy);
router.post('/deleteOrderBy', OrderController.deleteOrderBy);

module.exports = router;