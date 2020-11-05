const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
const { UsersModel } = require('./../db/usersSchema');

//===================================================================================\\
const addDB = async (req, res) => {
    const body = req.body; schema = req.params.id;
    try {
        let document = {}, departmentList = {}, categoryList = {};
        if (schema === "product") {
            document = new ProductsModel(body).save();
            departmentList = new DepartmentsModel({ id: body.id, department: body.department }).save();
            categoryList = new CategoriesModel({ id: body.id, department: body.department, category: body.category }).save();
        }
        if (schema === "user") {
            document = new UsersModel(body);
        }
        try {
            console.log('document :', document)
            res.json("Successfully Added");
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
