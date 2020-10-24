const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 5, maxlength: 255 },
    role_id: { type: Date, required: true },
});

const UsersModel = mongoose.model("Users", userSchema);

module.exports = {
    UsersModel,
};