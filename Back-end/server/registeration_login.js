const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles, products } = require('./../models');
const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');
const SALT = Number(process.env.SALT);

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

const register = async (body) => {
  const newdUser = users.filter((e) => e.email === body.email);
  if (!newdUser.length) {
    users.push({
      email: body.email,
      password: await bcrypt.hash(body.password, SALT),
      role_id: body.id,
    });
    return "Registerion Done You can login now";
  } else {
    return 'User already exists';
  }
};

const login = async (body) => {
  const loginUser = users.filter((e) => e.email === body.email);
  if (!loginUser.length) {
    return 'User Not Found please register';
  } else {
    const {loginEmail,loginPassword,loginRole_id} = loginUser.shift();
    if (await bcrypt.compare(body.password, loginPassword)) {
      const loginRole = roles.filter((e) => e.id === loginRole_id);
      const payload = {
        email: loginEmail,
        role: loginRole.type,
      };
      return await jwt.sign(payload, process.env.SECRET);
    } else {
      return 'Username or password not correct';
    }
  }
};

module.exports = {
    addDB,
    register,
    login
  };
  