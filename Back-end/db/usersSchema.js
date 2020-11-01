const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true , unique : true },
    password: { type: String, required: true, minlength: 5, maxlength: 255 },
    role_id: { type: Number, required: true },
});

const UsersModel = mongoose.model("users", userSchema);

module.exports = {
    UsersModel,
};