const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles, products, ELECTRONICS, laptops, desktops, tablets, monitors, } = require('./models');
const SALT = Number(process.env.SALT);
const getUsers = () => {
  return users;
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
    return newUser;
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
        role: savedRole[0].role,
      };
      return await jwt.sign(payload, process.env.SECRET);
    } else {
      return 'Username or password not correct';
    }
  }
};
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tYXJAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOlsiciIsInciXSwiaWF0IjoxNjAzMjkxNzAwfQ.kpSA3n8XEU8ci5fHTH1zBpQ5eq6oJISaS88zfyHU0Tw"

const getMainElectronics = async () => {
  const categories = [];
  for (let i = 0; i < products.length; i++) {
    if (categories.indexOf(products[i].department) === -1) {
      categories.push(products[i].department);
    }
  }
  return await categories;
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
      categories.push(products[i].product + ": " + products[i].price+'$');
    }
  }
  if (!categories.length) {
    return "Sorry this category is not available yet";
  }
  return await categories;
};

const postNewProducts = async (body, id, type) => {
  let countOfPushProcesses = 0 ; 
  for (let i = 0; i < body.length; i++) {
    if (body[i].category.toLowerCase() === type && body[i].department.toLowerCase() === id ) {
      products.push(body[i]);
      countOfPushProcesses++;
    }
  }
  if ( countOfPushProcesses === 0 ) return "Sorry you can't add product in wrong classification" ; 
  return await "Successfully add a new product";
}

const postNewDepartment = async (body,id) => {
  for (let i = 0; i < body.length; i++) {
    if (body[i].department.toLowerCase() === id ) {
      products.push(body[i]);
    }
  }
  return await "Successfully add a new product";
}

const discountProducts = async (id) => {
  const discount = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= id) {
      discountProducts.push(products[i].product + ' : ' + products[i].price * 0.8+'$')
    }
  }
   return await discount;
};

const deleteTablets = async (body) => {
  const products = [];
  for (let i = 0; i < tablets.length; i++) {
    if (tablets[i].price >= body.price) {
      tablets.slice(i, 1);
    }
  }
  for (let i = 1; i < tablets.length; i++) {
    products.push(tablets[i].product + ' : ' + tablets[i].price);
  }
  return await products;
};

const deleteMonitors = async (body) => {
  const products = [];
  for (let i = 0; i < monitors.length; i++) {
    if (monitors[i].price >= body.price) {
      monitors.slice(i, 1);
    }
  }
  for (let i = 1; i < monitors.length; i++) {
    products.push(monitors[i].product + ' : ' + monitors[i].price);
  }
  return await products;
};

module.exports = {
  register,
  login,
  getUsers,
  getMainElectronics,
  // getComputers,
  getElectronicsDepartment,
  getElectronicsCategory,
  // getLaptops,
  // getDesktops,
  // getTablets,
  // getMonitors,
  // postComputers,
  // getComputerComponents,
  postNewProducts,
  postNewDepartment,
  // postLaptops,
  // postTablets,
  // postMonitors,
  // postElectronics,
  // getCellPhones,
  // getSamasung,
  // getIphone,
  // getHuawei,
  discountProducts,
  // putDesktops,
  deleteTablets,
  deleteMonitors,
};
