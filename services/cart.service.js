const { CartModel } = require('../models');

const moment = require('moment');

const generateCartID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestCart = await CartModel.findOne().sort({ _id: -1 });

    const lastSequence = latestCart ? parseInt(latestCart.cart_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newCartID = `CART${today}-${sequence}`;
    while (await CartModel.exists({ cart_id: newCartID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newCartID = `CART${today}-${sequence}`;
    }
    return newCartID;
};

const getCartBy = async () => {
    return await CartModel.find();
};

const getCartByID = async (data) => {
    const res = await CartModel.find({ cart_id: data.cart_id });
    return res[0]
};

const insertCart = async (data) => {
    data.cart_id = await generateCartID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    console.log(data);

    // return await CartModel.create(data);
};

const updateCartBy = async (data) => {
    return await CartModel.findOneAndUpdate(
        { cart_id: data.cart_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteCartBy = async (data) => {
    return await CartModel.findOneAndDelete({ cart_id: data.cart_id });
};

module.exports = { generateCartID, getCartBy, getCartByID, insertCart, updateCartBy, deleteCartBy };