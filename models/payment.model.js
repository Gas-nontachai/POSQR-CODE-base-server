const connection = require('../config/db');
const handleDbQuery = require('../utils/helper');

const PaymentModel = {
  generatePaymentID: () => {
    let now = new Date();
    let code = `PAY${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-`;

    let sql = `
      SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(payment_id, ${code.length + 1}, 3) AS SIGNED)), 0) + 1, 3, '0')) AS id
      FROM tb_payment
      WHERE payment_id LIKE ${connection.escape(`${code}%`)}
    `;

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getPaymentBy: () => {
    let sql = `SELECT * FROM tb_payment`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getPaymentByID: (data = {}) => {
    let sql = `SELECT * FROM tb_payment WHERE payment_id = ${connection.escape(data.payment_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  insertPayment: (data = {}) => {
    let sql = `
      INSERT INTO tb_payment (
      payment_id, 
      order_id, 
      amount, 
      payment_method, 
      payment_status, 
      payment_time
      ) 
      VALUES (
      ${connection.escape(data.payment_id)}, 
      ${connection.escape(data.order_id)}, 
      ${connection.escape(data.amount)}, 
      ${connection.escape(data.payment_method)},
      ${connection.escape(data.payment_status)},
      ${connection.escape(data.payment_time)}
      )
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  updatePaymentBy: (data = {}) => {
    let sql = `
      UPDATE tb_payment 
      SET order_id = ${connection.escape(data.order_id)} ,
      amount = ${connection.escape(data.amount)} ,
      payment_method = ${connection.escape(data.payment_method)}  
      payment_status = ${connection.escape(data.payment_status)}  
      payment_time = ${connection.escape(data.payment_time)}  
      WHERE payment_id = ${connection.escape(data.payment_id)}
    `;
    console.log(sql);

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  deletePaymentBy: (data = {}) => {
    let sql = `DELETE FROM tb_payment WHERE payment_id = ${connection.escape(data.payment_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  }
};

module.exports = PaymentModel;
