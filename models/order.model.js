const connection = require('../config/db');
const handleDbQuery = require('../utils/helper');

const OrderModel = {
  generateOrderID: () => {
    let now = new Date();
    let code = `OR${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-`;

    let sql = `
      SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(order_id, ${code.length + 1}, 3) AS SIGNED)), 0) + 1, 3, '0')) AS id
      FROM tb_order
      WHERE order_id LIKE ${connection.escape(`${code}%`)}
    `;

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getOrderBy: () => {
    let sql = `SELECT * FROM tb_order`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getOrderByID: (data = {}) => {
    let sql = `SELECT * FROM tb_order WHERE order_id = ${connection.escape(data.order_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  insertOrder: (data = {}) => {
    let sql = `
      INSERT INTO tb_order (
      order_id, 
      table_id, 
      order_status, 
      order_time
      ) 
      VALUES (
      ${connection.escape(data.order_id)}, 
      ${connection.escape(data.table_id)}, 
      ${connection.escape(data.order_status)}, 
      ${connection.escape(data.order_time)} 
      )
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  updateOrderBy: (data = {}) => {
    let sql = `
      UPDATE tb_order 
      SET table_id = ${connection.escape(data.table_id)} ,
      order_status = ${connection.escape(data.order_status)} ,
      order_time = ${connection.escape(data.order_time)}  
      WHERE order_id = ${connection.escape(data.order_id)}
    `;
    console.log(sql);

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  deleteOrderBy: (data = {}) => {
    let sql = `DELETE FROM tb_order WHERE order_id = ${connection.escape(data.order_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  }
};

module.exports = OrderModel;
