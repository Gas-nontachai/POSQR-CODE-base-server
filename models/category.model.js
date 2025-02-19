const connection = require('../config/db');
const handleDbQuery = require('../utils/helper');

const CategoryModel = {
  generateCategoryID: () => {
    let code = `CAT${new Date().getFullYear()}`;
    let sql = `
      SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(category_id, ${code.length + 1}, 4) AS SIGNED)), 0) + 1, 4, '0')) AS id
      FROM tb_category
      WHERE category_id LIKE ${connection.escape(`${code}%`)}
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getCategoryBy: () => {
    let sql = `SELECT * FROM tb_category`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getCategoryByID: (data = {}) => {
    let sql = `SELECT * FROM tb_category WHERE category_id = ${connection.escape(data.category_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  insertCategory: (data = {}) => {
    let sql = `
      INSERT INTO tb_category (category_id, category_name) 
      VALUES (${connection.escape(data.category_id)}, ${connection.escape(data.category_name)})
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  updateCategoryBy: (data = {}) => {
    let sql = `
      UPDATE tb_category 
      SET category_name = ${connection.escape(data.category_name)} 
      WHERE category_id = ${connection.escape(data.category_id)}
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  deleteCategoryBy: (data = {}) => {
    let sql = `DELETE FROM tb_category WHERE category_id = ${connection.escape(data.category_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  }
};

module.exports = CategoryModel;
