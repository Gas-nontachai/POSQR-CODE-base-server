const connection = require('../config/db');
const handleDbQuery = require('../utils/helper');

const MenuModel = {
  generateMenuID: () => {
    let now = new Date();
    let code = `M${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-`;

    let sql = `
      SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(menu_id, ${code.length + 1}, 3) AS SIGNED)), 0) + 1, 3, '0')) AS id
      FROM tb_menu
      WHERE menu_id LIKE ${connection.escape(`${code}%`)}
    `;

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getMenuBy: () => {
    let sql = `SELECT * FROM tb_menu`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getMenuByID: (data = {}) => {
    let sql = `SELECT * FROM tb_menu WHERE menu_id = ${connection.escape(data.menu_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  insertMenu: (data = {}) => {
    let sql = `
      INSERT INTO tb_menu (
      menu_id, 
      menu_name, 
      price, 
      category_id, 
      image
      ) 
      VALUES (
      ${connection.escape(data.menu_id)}, 
      ${connection.escape(data.menu_name)}, 
      ${connection.escape(data.price)}, 
      ${connection.escape(data.category_id)}, 
      ${connection.escape(data.image)}
      )
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  updateMenuBy: (data = {}) => {
    let sql = `
      UPDATE tb_menu 
      SET menu_name = ${connection.escape(data.menu_name)} ,
      price = ${connection.escape(data.price)} ,
      category_id = ${connection.escape(data.category_id)} ,
      image = ${connection.escape(data.image)} 
      WHERE menu_id = ${connection.escape(data.menu_id)}
    `;
    console.log(sql);

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  deleteMenuBy: (data = {}) => {
    let sql = `DELETE FROM tb_menu WHERE menu_id = ${connection.escape(data.menu_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  }
};

module.exports = MenuModel;
