const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema({
    department: { type: String, required: true },
});

const DepartmentsModel = mongoose.model("departments", departmentsSchema);

module.exports = {
    DepartmentsModel,
};