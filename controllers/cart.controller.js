const { CartService } = require('../services');
const handleRequest = require('../utils/handleRequest');

exports.generateCartID = handleRequest(async () => {
    return await CartService.generateCartID();
});

exports.getCartBy = handleRequest(async () => {
    return await CartService.getCartBy();
});

exports.getCartByID = handleRequest(async (req) => {
    return await CartService.getCartByID(req.body);
});

exports.insertCart = handleRequest(async (req) => {
    return await CartService.insertCart(req.body);
});

exports.updateCartBy = handleRequest(async (req) => {
    return await CartService.updateCartBy(req.body);
});

exports.deleteCartBy = handleRequest(async (req) => {
    return await CartService.deleteCartBy(req.body);
});