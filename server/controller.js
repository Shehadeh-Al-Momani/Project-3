const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles, products } = require('./../models');
const { ProductsModel } = require('./../db/productsSchema');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');
const SALT = Number(process.env.SALT);

const getMainElectronics = async () => {
  return await ProductsModel.find({}).select('-__v').select('-_id').select('-id').select('-version').select('-product').select('-price').select('-category').distinct('department');
}

const addDB = async (body, schema) => {
  let document = {};
  if (schema === "product") {
    document = new ProductsModel(body);
  }
  if (schema === "user") {
    document = new UsersModel(body);
  } if (schema === "role") {
    document = new RolesModel(body);
  }
  console.log('xxxxxxxxxxxxxxxxx :', await ProductsModel.find({ id: document.id }))
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

const getElectronicsDepartment = async (id) => {
  return await ProductsModel.find({ department: id }).select('-__v').select('-_id').select('-id').select('-version').select('-product').select('-price').select('-department').distinct('category');
};


const getElectronicsCategory = async (id) => {
  return await ProductsModel.find({ category: id }).select('-__v').select('-_id').select('-id').select('-version').select('-category').select('-department').distinct('product');
};

const discountProducts = async (id) => { 
   await ProductsModel.find( {price: {$gte: id} }).updateMany({ price: this.price*.8});
   return
  };
  //{ $set: { price: 9.99 } }
// const updateNewTodoList = async (newQuery, id) => {
//   try {
//     const newTodo = await todoModel.findByIdAndUpdate( price: { $gt: id }, price*0.8);
//     return newTodo;
//   } catch (err) {
//     throw err;
//   }
// };
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
  register,
  login,
  getAllDBItems,
  getMainElectronics,
  getElectronicsDepartment,
  getElectronicsCategory,
  discountProducts,
  deleteProducts,
};
