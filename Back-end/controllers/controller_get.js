const { ProductsModel } = require('./../db_schema/products');
const { UsersModel } = require('./../db_schema/users');
const { RolesModel } = require('./../db_schema/roles');

//===================================================================================\\
const getDepartments = async (req, res) => {
    try {
        //{res.json(await ProductsModel.find().distinct('department'));}
        const arr = await ProductsModel.find();
        const newArr = arr.map((e, i) => { return e.department })
        const unique = [...new Set(newArr)];
        res.json(await unique);
    } catch (err) {
        throw err;
    }
}
//===================================================================================\\
const getAllDBItems = async (req, res) => {
    const model = req.params.id;
    try {
        if (model === "products") res.json(await ProductsModel.find({}));
        if (model === "users") res.json(await UsersModel.find({}));
        if (model === "roles") res.json(await RolesModel.find({}));
    } catch (error) {
        console.log('ERR: ', err);
        throw err;
    }
};
//===================================================================================\\
const getCategories = async (req, res) => {
    const id = req.params.id;
    try {
        //  res.json(await CategoriesModel.find({ department: id }).distinct('category'));
        const arr = await ProductsModel.find({ department: id });
        const newArr = arr.map((e) => { return e.category; })
        res.json(await [...new Set(newArr)]);
    } catch (error) {
        throw error;
    }
};
//===================================================================================\\
const getProducts = async (req, res) => {
    const id = req.params.id; index = req.params.index;
    try {
        const arr = await ProductsModel.find({ department: id, category: index });
        const newArr = arr.map((e) => { return `${e.product} : ${e.price}` })
        return res.json(await [...new Set(newArr)]);
    } catch (error) {
        throw error;
    }
};
//===================================================================================\\

module.exports = {
    getAllDBItems,
    getDepartments,
    getCategories,
    getProducts
};
