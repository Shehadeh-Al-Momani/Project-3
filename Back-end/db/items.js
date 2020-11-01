const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    id: { type: Number, required: true , unique : true},
    version: { type: Number, required: true },
    product: { type: String, required: true , unique : true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    department: { type: String, required: true },
});

const ItemsModel = mongoose.model("products", itemsSchema);

module.exports = {
    ItemsModel,
};