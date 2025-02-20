const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        user_id: { type: String, required: true, unique: true },
        user_fullname: { type: String, required: true },
        user_email: { type: String, required: true, unique: true },
        user_phone: { type: String, required: true, unique: true },
        user_password: { type: String, required: true, },
        user_img: { type: String, },
        add_date: { type: Date, default: Date.now }
    }
);

const User = mongoose.model('tb_users', userSchema);

module.exports = User;
