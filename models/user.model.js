const connection = require('../config/db');
const handleDbQuery = require('../utils/helper');

const UserModel = {
  generateUserID: () => {
    let now = new Date();
    let code = `U${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-`;

    let sql = `
      SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(user_id, ${code.length + 1}, 3) AS SIGNED)), 0) + 1, 3, '0')) AS id
      FROM tb_user
      WHERE user_id LIKE ${connection.escape(`${code}%`)}
    `;

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getUserBy: () => {
    let sql = `SELECT * FROM tb_user`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getUserByID: (data = {}) => {
    let sql = `SELECT * FROM tb_user WHERE user_id = ${connection.escape(data.user_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  insertUser: (data = {}) => {
    let sql = `
      INSERT INTO tb_user (
      user_id, 
      user_name, 
      user_role_id 
      ) 
      VALUES (
      ${connection.escape(data.user_id)}, 
      ${connection.escape(data.user_name)}, 
      ${connection.escape(data.user_role_id)} 
      )
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  updateUserBy: (data = {}) => {
    let sql = `
      UPDATE tb_user 
      SET user_name = ${connection.escape(data.user_name)} ,
      user_role_id = ${connection.escape(data.user_role_id)}  
      WHERE user_id = ${connection.escape(data.user_id)}
    `;
    console.log(sql);

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  deleteUserBy: (data = {}) => {
    let sql = `DELETE FROM tb_user WHERE user_id = ${connection.escape(data.user_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  }
};

module.exports = UserModel;
