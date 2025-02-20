const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema(
    {
        menu_id: { type: String, required: true, unique: true },
        menu_name: { type: String, required: true },
        menu_price: { type: Number, required: true },
        menu_img: { type: String, required: true },
        category_id: { type: String, required: true },
        add_date: { type: Date, default: Date.now }
    }
);

const Menu = mongoose.model('tb_menus', menuSchema);

module.exports = Menu;
