const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
// const { ItemsModel } = require('./../db/items');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');

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
const getAllDBItems = async (model) => {
  try {
    if (model === "products") return await ProductsModel.find({});
    if (model === "users") return await UsersModel.find({});
    if (model === "roles") return await RolesModel.find({});
  } catch (error) {
    console.log('ERR: ', err);
    throw err;
  }
};
//===================================================================================\\
const getCategories = async (id) => {
  // return await CategoriesModel.find({ department: id }).distinct('category');
  const arr = await ProductsModel.find({ department: id });
  const newArr = arr.map((e) => { return e.category; })
  return await [...new Set(newArr)];
};
//===================================================================================\\
const getProducts = async (id, index) => {
  const arr = await ProductsModel.find({ department: id, category: index });
  const newArr = arr.map((e) => { return `${e.product} : ${e.price}` })
  return await [...new Set(newArr)];
};
//===================================================================================\\

module.exports = {  
  getAllDBItems,
  getDepartments,
  getCategories,
  getProducts
};
