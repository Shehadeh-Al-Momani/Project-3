const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({
    id: { type: Number, required: true , unique : true },
    type: { type: String, required: true },
});

const RolesModel = mongoose.model("roles", rolesSchema);

module.exports = {
    RolesModel,
};

// const UserSchema = new mongoose.Schema({
//     name: { type: String },
//     email: { type: String },
//     password: { type: String, required: true, minlength: 3, maxlength: 255 },
//     //give different access rights if admin or not
//     isAdmin: Boolean,
// });
// //custom method to generate authToken
// UserSchema.methods.generateAuthToken = function () {
//     const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, SECRET);
//     return token;
// };
// const User = mongoose.model("User", UserSchema);
