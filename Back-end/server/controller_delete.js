const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
// const { ItemsModel } = require('./../db/items');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');

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

//*************************************************************************************************\\
const addDB = async (body, schema) => {
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
    return await "Successfully Added";
  }
  catch (err) {
    throw err;
  }
};

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

const getCategories = async (id) => {
  // return await CategoriesModel.find({ department: id }).distinct('category');
  const arr = await ProductsModel.find({ department: id });
  const newArr = arr.map((e) => { return e.category; })
  return await [...new Set(newArr)];
};

const getProducts = async (id, index) => {
  const arr = await ProductsModel.find({ department: id, category: index });
  const newArr = arr.map((e) => { return `${e.product} : ${e.price}` })
  return await [...new Set(newArr)];
};

const discountProducts = async (id) => {
  try {
    const arr = await ProductsModel.find({ price: { $gte: id } });
    arr.map(async (e) => {
      let newPrice = e.price * 0.8;
      return await ProductsModel.updateMany({ price: newPrice });
    });
    return await arr;
  } catch (err) {
    throw err;
  }
};

const deleteProducts = async (parms) => {
  try {
    return await ProductsModel.deleteMany({ version: { $lte: parms } })
  } catch (error) {
    throw error;
  }
};


module.exports = {
  addDB,
  getAllDBItems,
  getDepartments,
  getCategories,
  getProducts,
  discountProducts,
  deleteProducts,
};
