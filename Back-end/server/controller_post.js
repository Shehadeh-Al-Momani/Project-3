const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
// const { ItemsModel } = require('./../db/items');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');

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

module.exports = {
  addDB,
 };
