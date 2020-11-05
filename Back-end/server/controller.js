const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles, products } = require('./../models');
const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
// const { ItemsModel } = require('./../db/items');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');
const SALT = Number(process.env.SALT);


const getDepartments = async () => {
  //{return await ProductsModel.find().distinct('department');}
  const arr = await ProductsModel.find();
  const newArr = arr.map((e, i) => { return e.department })
  const unique = [...new Set(newArr)];
  return await unique;
}

//*************************************************************************************************\\
const addDB = async (body, schema) => {
  let document = {}, departmentList = {}, categoryList = {};
  if (schema === "product") {
    document = new ProductsModel(body);
    departmentList = new DepartmentsModel({ id: body.id, department: body.department });
    categoryList = new CategoriesModel({ id: body.id, department: body.department, category: body.category });
  }
  if (schema === "user") {
    document = new UsersModel(body);
  } if (schema === "role") {
    document = new RolesModel(body);
  }
  console.log('xxxxxxxxxxxxxxxxx :', await ProductsModel.find({ id: document.id }))
  departmentList.save()
  categoryList.save()
  document.save()
  try {
    console.log('document :', document)
    return await "Successfully Added";
  }
  catch (err) {
    throw err;
  }
};

const register = async (user) => {
  const savedUser = users.filter((e) => e.email === user.email);
  if (!savedUser.length) {
    const passwordHash = await bcrypt.hash(user.password, SALT);
    const newUser = {
      email: user.email,
      password: passwordHash,
      role_id: user.id,
    }
    users.push(newUser);
    return await newUser;
  } else {
    return 'User already exists';
  }
};

const login = async (user) => {
  const savedUser = users.filter((e) => e.email === user.email);
  if (!savedUser.length) {
    return 'User Not Found please register';
  } else {
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
      const savedRole = roles.filter((e) => e.id === savedUser[0].role_id);
      const payload = {
        email: savedUser[0].email,
        role: savedRole[0].type,
      };
      return await jwt.sign(payload, process.env.SECRET);
    } else {
      return 'Username or password not correct';
    }
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
    return await ProductsModel.deleteMany ({ version: { $lte: parms } })
  } catch (error) {
    throw error;
  }
};


module.exports = {
  addDB,
  register,
  login,
  getAllDBItems,
  getDepartments,
  getCategories,
  getProducts,
  discountProducts,
  deleteProducts,
};
