// in database create table (schema)
const mongoose = require("mongoose");

const electronicsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    category: { type: String, required: true },
    departments: { type: Date, required: true },
});
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role_id: { type: Date, required: true },
});
const rolesSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    type: { type: String, required: true },
});
const laptopsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    product: { type: String, required: true },
    price: { type: Date, required: true },
});
const desktopsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    product: { type: String, required: true },
    price: { type: Date, required: true },
});
const tabletsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    product: { type: String, required: true },
    price: { type: Date, required: true },
});
const monitorsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    product: { type: String, required: true },
    price: { type: Date, required: true },
});
const electronics = mongoose.model("electronics", electronicsSchema);
const users = mongoose.model("Users", userSchema);
const roles = mongoose.model("roles", rolesSchema);
const laptops = mongoose.model("laptops", laptopsSchema);
const desktops = mongoose.model("desktops", desktopsSchema);
const tablets = mongoose.model("tablets", tabletsSchema);
const monitors = mongoose.model("monitors", monitorsSchema);

module.exports = {
    users,
    roles,
    electronics,
    laptops,
    desktops,
    tablets,
    monitors,
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
