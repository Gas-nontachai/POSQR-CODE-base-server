const connection = require('../config/db');

const CategoryModel = {
  generateCategoryID: () => new Promise((resolve, reject) => {
    let code = `CAT${new Date().getFullYear()}`
    let sql = `
            SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(category_id, ${code.length + 1}, 4) AS SIGNED)), 0) + 1, 4, '0')) AS id
            FROM tb_category
            WHERE category_id LIKE ${connection.escape(`${code}%`)}
        `;
    connection.query(sql, (err, res) => {
      if (err) return reject(new Error("Error generating category ID"));
      resolve(res[0].id);
    });
  }),

  getCategoryBy: (data = {}) => new Promise((resolve, reject) => {
    let sql = `SELECT * FROM tb_category`;
    connection.query(sql, (err, res) => {
      if (err) return reject(new Error(err.message));
      resolve(res);
    });
  }),

  getCategoryByID: (data = {}) => new Promise((resolve, reject) => {
    console.log(data);

    let sql = `SELECT * FROM tb_category WHERE category_id = ${connection.escape(data.category_id)}`;
    connection.query(sql, (err, res) => {
      if (err) return reject(new Error(err.message));
      if (!res.length) return reject(new Error('Category not found'));
      resolve(res[0]);
    });
  }),

  insertCategory: (data = {}) => new Promise((resolve, reject) => {
    let sql = `
            INSERT INTO tb_category (category_id, category_name) 
            VALUES (${connection.escape(data.category_id)}, ${connection.escape(data.category_name)})
        `;
    connection.query(sql, (err, res) => {
      if (err) return reject(new Error(err.message));
      resolve(res);
    });
  }),

  updateCategoryBy: (data = {}) => new Promise((resolve, reject) => {
    let sql = `
            UPDATE tb_category 
            SET category_name = ${connection.escape(data.category_name)} 
            WHERE category_id = ${connection.escape(data.category_id)}
        `;
    connection.query(sql, (err, res) => {
      if (err) return reject(new Error(err.message));
      resolve(res);
    });
  }),

  deleteCategoryBy: (data = {}) => new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_category WHERE category_id = ${connection.escape(data.category_id)}`;
    connection.query(sql, (err, res) => {
      if (err) return reject(new Error(err.message));
      resolve(res);
    });
  })
};

module.exports = CategoryModel;
