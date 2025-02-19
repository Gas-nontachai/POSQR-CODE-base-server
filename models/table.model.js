const connection = require('../config/db');
const handleDbQuery = require('../utils/helper');

const TableModel = {
  generateTableID: () => {
    let now = new Date();
    let code = `TB${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-`;

    let sql = `
      SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(table_id, ${code.length + 1}, 3) AS SIGNED)), 0) + 1, 3, '0')) AS id
      FROM tb_table
      WHERE table_id LIKE ${connection.escape(`${code}%`)}
    `;

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getTableBy: () => {
    let sql = `SELECT * FROM tb_table`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getTableByID: (data = {}) => {
    let sql = `SELECT * FROM tb_table WHERE table_id = ${connection.escape(data.table_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  insertTable: (data = {}) => {
    let sql = `
      INSERT INTO tb_table (
      table_id, 
      table_id, 
      table_status, 
      table_time
      ) 
      VALUES (
      ${connection.escape(data.table_id)}, 
      ${connection.escape(data.table_id)}, 
      ${connection.escape(data.table_status)}, 
      ${connection.escape(data.table_time)} 
      )
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  updateTableBy: (data = {}) => {
    let sql = `
      UPDATE tb_table 
      SET table_id = ${connection.escape(data.table_id)} ,
      table_status = ${connection.escape(data.table_status)} ,
      table_time = ${connection.escape(data.table_time)}  
      WHERE table_id = ${connection.escape(data.table_id)}
    `;
    console.log(sql);

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  deleteTableBy: (data = {}) => {
    let sql = `DELETE FROM tb_table WHERE table_id = ${connection.escape(data.table_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  }
};

module.exports = TableModel;
