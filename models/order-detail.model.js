const connection = require('../config/db');
const handleDbQuery = require('../utils/helper');

const OrderDetailModel = {
  generateOrderDetailID: () => {
    let now = new Date();
    let code = `ORD${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-`;

    let sql = `
      SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(detail_id, ${code.length + 1}, 3) AS SIGNED)), 0) + 1, 3, '0')) AS id
      FROM tb_order_detail
      WHERE detail_id LIKE ${connection.escape(`${code}%`)}
    `;

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getOrderDetailBy: () => {
    let sql = `SELECT * FROM tb_order_detail`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getOrderDetailByID: (data = {}) => {
    let sql = `SELECT * FROM tb_order_detail WHERE detail_id = ${connection.escape(data.detail_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  insertOrderDetail: (data = {}) => {
    let sql = `
      INSERT INTO tb_order_detail (
      detail_id, 
      order_id, 
      menu_id, 
      quantity, 
      subtotal
      ) 
      VALUES (
      ${connection.escape(data.detail_id)}, 
      ${connection.escape(data.order_id)}, 
      ${connection.escape(data.menu_id)}, 
      ${connection.escape(data.quantity)}, 
      ${connection.escape(data.subtotal)} 
      )
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  updateOrderDetailBy: (data = {}) => {
    let sql = `
      UPDATE tb_order_detail 
      SET order_id = ${connection.escape(data.order_id)} ,
      menu_id = ${connection.escape(data.menu_id)} ,
      quantity = ${connection.escape(data.quantity)} ,
      subtotal = ${connection.escape(data.subtotal)}  
      WHERE detail_id = ${connection.escape(data.detail_id)}
    `;
    console.log(sql);

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  deleteOrderDetailBy: (data = {}) => {
    let sql = `DELETE FROM tb_order_detail WHERE detail_id = ${connection.escape(data.detail_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  }
};

module.exports = OrderDetailModel;
