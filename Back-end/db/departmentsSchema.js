const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    department: { type: String, required: true , unique : true },
});

const DepartmentsModel = mongoose.model("departments", departmentsSchema);

module.exports = {
    DepartmentsModel,
};

 