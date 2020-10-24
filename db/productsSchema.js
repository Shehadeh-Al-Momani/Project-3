const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    id: { type: Number, required: true , unique : true},
    version: { type: Number, required: true },
    product: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    department: { type: String, required: true },
});

const ProductsModel = mongoose.model("products", productsSchema);

module.exports = {
    ProductsModel,
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
