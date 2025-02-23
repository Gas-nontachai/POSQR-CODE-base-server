const { CategoryModel } = require('../models');

const moment = require('moment');

const generateCategoryID = async (digits = 3) => {
    const today = moment().format('YYMMDD');
    const latestCategory = await CategoryModel.findOne().sort({ _id: -1 });

    const lastSequence = latestCategory ? parseInt(latestCategory.category_id.split('-')[1]) : 0;
    let sequence = String(lastSequence + 1).padStart(digits, '0');

    let newCategoryID = `CAT${today}-${sequence}`;
    while (await CategoryModel.exists({ category_id: newCategoryID })) {
        sequence = String(parseInt(sequence) + 1).padStart(digits, '0');
        newCategoryID = `CAT${today}-${sequence}`;
    }
    return newCategoryID;
};

const getCategoryBy = async (data) => {
    return await CategoryModel.find(data);
};

const getCategoryByID = async (data) => {
    const res = await CategoryModel.find({ category_id: data.category_id });
    return res[0]
};

const insertCategory = async (data) => {
    data.category_id = await generateCategoryID()
    if (!data.add_date || (typeof data.add_date === 'string' && data.add_date.trim() === '')) {
        data.add_date = new Date();
    }
    return await CategoryModel.create(data);
};

const updateCategoryBy = async (data) => {
    return await CategoryModel.findOneAndUpdate(
        { category_id: data.category_id },
        { $set: data },
        { new: true, runValidators: true }
    );
};

const deleteCategoryBy = async (data) => {
    return await CategoryModel.findOneAndDelete({ category_id: data.category_id });
};

module.exports = { generateCategoryID, getCategoryBy, getCategoryByID, insertCategory, updateCategoryBy, deleteCategoryBy };