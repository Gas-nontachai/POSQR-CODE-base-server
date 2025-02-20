const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        category_id: { type: String, required: true, unique: true },
        category_name: { type: String, required: true }, 
        add_date: { type: Date, default: Date.now }
    }
);

const Category = mongoose.model('tb_categorys', categorySchema);

module.exports = Category;
