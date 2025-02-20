const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema(
    {
        user_role_id: { type: String, required: true, unique: true },
        user_role_name: { type: String, required: true },
        add_date: { type: Date, default: Date.now }
    }
);

const UserRole = mongoose.model('tb_user_role', userRoleSchema);

module.exports = UserRole;
