const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    department: { type: String, required: true , unique : true },
    category: { type: String, required: true , unique : true },
});

const CategoriesModel = mongoose.model("categories", categoriesSchema);

module.exports = {
    CategoriesModel,
};