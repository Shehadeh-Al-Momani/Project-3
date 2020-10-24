const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles } = require('./../models');
const { ProductsModel } = require('./../db/productsSchema');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');
const SALT = Number(process.env.SALT);

const addDB = async (body, schema) => {
  let item = {};
  if (schema === "product") {
    item = new ProductsModel(body);
  }
  if (schema === "user") {
    item = new UsersModel(body);
  } if (schema === "role") {
    item = new RolesModel(body);
  }
  item.save()
  try {
    return await item;
  }
  catch (err) {
    throw err;
  }
};

const register = async (user) => {
  const savedUser = users.filter((element) => element.email === user.email);
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
  const savedUser = users.filter((element) => element.email === user.email);
  if (!savedUser.length) {
    return 'User Not Found please register';
  } else {
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
      const savedRole = roles.filter((element) => element.id === savedUser[0].role_id);
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

const getMainElectronics = async () => {
  // const products = ProductsModel.find({});
  // const categories = [];
  // for (let i = 0; i < products.length; i++) {
  //   if (categories.indexOf(products[i].department) === -1) {
  //     categories.push(products[i].department);
  //   }
  // }
  return await ProductsModel.find({}).department;
}

const getElectronicsDepartment = async (id) => {
  const departmentsArray = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].department.toLowerCase() === id.toLowerCase()) {
      if (departmentsArray.indexOf(products[i].category) === -1) {
        departmentsArray.push(products[i].category);
      }
    }
  }
  if (!departmentsArray.length) {
    return "Sorry this department is not available yet";
  }
  return await departmentsArray;
};


const getElectronicsCategory = async (id) => {
  const categories = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category.toLowerCase() === id) {
      categories.push(products[i].product + ": " + products[i].price + '$');
    }
  }
  if (!categories.length) {
    return "Sorry this category is not available yet";
  }
  return await categories;
};

const postNewProducts = async (body, id, type) => {
  let countOfPushProcesses = 0;
  for (let i = 0; i < body.length; i++) {
    if (body[i].category.toLowerCase() === type && body[i].department.toLowerCase() === id) {
      products.push(body[i]);
      countOfPushProcesses++;
    }
  }
  if (countOfPushProcesses === 0) return "Sorry you can't add product in wrong classification";
  return await "Successfully add a new product";
}

const postNewDepartment = async (body, id) => {
  for (let i = 0; i < body.length; i++) {
    if (body[i].department.toLowerCase() === id) {
      products.push(body[i]);
    }
  }
  return await "Successfully add a new product";
}

const discountProducts = async (id) => {
  const discount = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= id) {
      discount.push(products[i].product + ' : ' + products[i].price * 0.8 + '$')
    }
  }
  return await discount;
};

const deleteProducts = async (body) => {
  const deleted = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].version <= body) {
      products.splice(i, 1);
      deleted.push(products.splice(i, 1));
    }
  }
  return await deleted;
};

module.exports = {
  addDB,
  getAllDBItems,
  register,
  login,
  getMainElectronics,
  getElectronicsDepartment,
  getElectronicsCategory,
  postNewProducts,
  postNewDepartment,
  discountProducts,
  deleteProducts,
};
