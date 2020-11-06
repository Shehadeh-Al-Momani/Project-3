const { ProductsModel } = require('./../db_schema/products');
const { CategoriesModel } = require('./../db_schema/catagories');
const { DepartmentsModel } = require('./../db_schema/departments');

//===================================================================================\\
const addDB = async (req, res) => {
    const body = req.body;
    try {
        const document = new ProductsModel(body).save();
        const departmentList = new DepartmentsModel({ id: body.id, department: body.department }).save();
        const categoryList = new CategoriesModel({ id: body.id, department: body.department, category: body.category }).save();
        try {
            res.json(["Successfully add this product : ", req.body]);
        }
        catch (err) {
            throw err;
        }
    } catch (error) {
        throw error;
    }
};
//===================================================================================\\

module.exports = {
    addDB,
};
