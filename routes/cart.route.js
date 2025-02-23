const express = require('express');
const router = express.Router();
const { CartController } = require('../controllers');
const callLogger = require('../utils/callLogger');

router.use(callLogger);

router.post('/generateCartID', CartController.generateCartID);
router.post('/getCartBy', CartController.getCartBy);
router.post('/getCartByID', CartController.getCartByID);
router.post('/insertCart', CartController.insertCart);
router.post('/updateCartBy', CartController.updateCartBy);
router.post('/deleteCartBy', CartController.deleteCartBy);

module.exports = router;