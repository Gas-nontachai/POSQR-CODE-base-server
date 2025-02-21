const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        user_id: { type: String, unique: true },
        user_fullname: { type: String },
        user_email: { type: String, unique: true },
        user_phone: { type: String, unique: true },
        user_password: { type: String },
        user_img: [{ type: String }],
        user_role_id: [{ type: String }],
        add_date: { type: Date, default: Date.now }
    }
);

const User = mongoose.model('tb_users', userSchema);

module.exports = User;
