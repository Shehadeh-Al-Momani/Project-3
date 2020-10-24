const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    category: { type: String, required: true },
});

const CategoriesModel = mongoose.model("categoriescategories", categoriesSchema);

module.exports = {
    CategoriesModel,
};