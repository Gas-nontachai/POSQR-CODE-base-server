const connection = require('../config/db');
const handleDbQuery = require('../utils/helper');

const UserRoleModel = {
  generateUserRoleID: () => {
    let now = new Date();
    let code = `UR${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-`;

    let sql = `
      SELECT CONCAT(${connection.escape(code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(user_role_id, ${code.length + 1}, 3) AS SIGNED)), 0) + 1, 3, '0')) AS id
      FROM tb_user_role
      WHERE user_role_id LIKE ${connection.escape(`${code}%`)}
    `;

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getUserRoleBy: () => {
    let sql = `SELECT * FROM tb_user_role`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  getUserRoleByID: (data = {}) => {
    let sql = `SELECT * FROM tb_user_role WHERE user_role_id = ${connection.escape(data.user_role_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  insertUserRole: (data = {}) => {
    let sql = `
      INSERT INTO tb_user_role (
      user_role_id, 
      user_role_name
      ) 
      VALUES (
      ${connection.escape(data.user_role_id)}, 
      ${connection.escape(data.user_role_name)}
      )
    `;
    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  updateUserRoleBy: (data = {}) => {
    let sql = `
      UPDATE tb_user_role 
      SET user_role_name = ${connection.escape(data.user_role_name)} 
      WHERE user_role_id = ${connection.escape(data.user_role_id)}
    `;
    console.log(sql);

    return handleDbQuery((cb) => connection.query(sql, cb));
  },

  deleteUserRoleBy: (data = {}) => {
    let sql = `DELETE FROM tb_user_role WHERE user_role_id = ${connection.escape(data.user_role_id)}`;
    return handleDbQuery((cb) => connection.query(sql, cb));
  }
};

module.exports = UserRoleModel;
