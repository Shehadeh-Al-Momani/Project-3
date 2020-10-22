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

// bcrypt.compare(password, hashedPassword, (err, result) => {}
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
const getComputers = async () => {
  const categories = [];
  for (let i = 1; i < products.length; i++) {
    if (categories.indexOf(products[i].department) === -1) {
      categories.push(products[i].department);
    }
  }
  return await categories;
};

//                         'laptop'
const getAll = async (typeToFind) => {
  // filter produt on this type
  const products = [];
  for (let i = 1; i < laptops.length; i++) {
    products.push(laptops[i].product + ' : ' + laptops[i].price);
  }
  return await products;
};

const getLaptops = async () => {
  const products = [];
  for (let i = 1; i < laptops.length; i++) {
    products.push(laptops[i].product + ' : ' + laptops[i].price);
  }
  return await products;
};

const getDesktops = async () => {
  const products = [];
  for (let i = 1; i < desktops.length; i++) {
    products.push(desktops[i].product + ' : ' + desktops[i].price);
  }
  return await products;
};

const getTablets = async () => {
  const products = [];
  for (let i = 1; i < tablets.length; i++) {
    products.push(tablets[i].product + ' : ' + tablets[i].price);
  }
  return await products;
};

const getMonitors = async () => {
  const products = [];
  for (let i = 1; i < monitors.length; i++) {
    products.push(monitors[i].product + ' : ' + monitors[i].price);
  }
  return await products;
};

const postComputers = async () => {
  const categories = [];
  for (let k in ELECTRONICS[0].departments) {
    categories.push(k);
  }
  return await categories;
};

const getComputerComponents = async () => {
  const products = [];
  computerComponents = ELECTRONICS[0].departments[4]
  for (let i = 1; i < computerComponents.length; i++) {
    products.push(computerComponents[i].product + ' : ' + computerComponents[i].price);
  }
  return await products;
}

const postLaptops = async (body) => {
  const obj = body.laptops;
  laptops.push({ id: laptops.length - 1, product: obj.product, price: obj.price });
  return await laptops;
}

const postTablets = async (body) => {
  const obj = body.tablets;
  tablets.push({ id: tablets.length - 1, product: obj.product, price: obj.price });
  return await tablets;
}

const postMonitors = async (body) => {
  const obj = body.monitors;
  monitors.push({ id: monitors.length - 1, product: obj.product, price: obj.price });
  return await monitors;
}

const postElectronics = async () => {
  return await ELECTRONICS[ELECTRONICS.length - 1];
}

const getElectronics = async () => {
  const categories = [];
  for (let i = 1; i < products.length; i++) {
    if (categories.indexOf(products[i].department) === -1) {
      categories.push(products[i].department);
    }
  }
  return await categories;
}

const getCellPhones = async () => {
  const categories = [];
  for (let k in ELECTRONICS[ELECTRONICS.length - 1].departments) {
    categories.push(k);
  }

  return await categories;
}

const getSamasung = async () => {
  const products = [];
  SAMSUNG = ELECTRONICS[ELECTRONICS.length - 1].departments[0];
  for (let i = 1; i < SAMSUNG.length; i++) {
    products.push(SAMSUNG[i].product + ' : ' + SAMSUNG[i].price);
  }
  return await products;
}

const getIphoneAndHuawi = async (type) => {
  const products = [];
  resut = ELECTRONICS[ELECTRONICS.length - 1].departments[0];
  for (let i = 1; i < resut.length; i++) {
    products.push(resut[i].product + ' : ' + resut[i].price);
  }
  return await products;
}
const getIphone = async () => {
  const products = [];
  IPHONE = ELECTRONICS[ELECTRONICS.length - 1].departments[1];
  for (let i = 1; i < IPHONE.length; i++) {
    products.push(IPHONE[i].product + ' : ' + IPHONE[i].price);
  }
  return await products;
}

const getHuawei = async () => {
  const products = [];
  HUAWEI = ELECTRONICS[ELECTRONICS.length - 1].departments[2];
  for (let i = 1; i < HUAWEI.length; i++) {
    products.push(HUAWEI[i].product + ' : ' + HUAWEI[i].price);
  }
  return await products;
}

const putLaptops = async (body) => {
  const products = [];
  for (let i = 0; i < laptops.length; i++) {
    if (laptops[i].price >= body.price) {
      laptops[i].price = 0.9 * laptops[i].price;
    }
  }
  for (let i = 1; i < laptops.length; i++) {
    products.push(laptops[i].product + ' : ' + laptops[i].price);
  }
  return await products;
};

const putDesktops = async (body) => {
  const products = [];
  for (let i = 0; i < desktops.length; i++) {
    if (desktops[i].price >= body.price) {
      desktops[i].price = 0.9 * desktops[i].price;
    }
  }
  for (let i = 1; i < desktops.length; i++) {
    products.push(desktops[i].product + ' : ' + desktops[i].price);
  }
  return await products;
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
  getComputers,
  getLaptops,
  getDesktops,
  getTablets,
  getMonitors,
  postComputers,
  getComputerComponents,
  postLaptops,
  postTablets,
  postMonitors,
  postElectronics,
  getElectronics,
  getCellPhones,
  getSamasung,
  getIphone,
  getHuawei,
  putLaptops,
  putDesktops,
  deleteTablets,
  deleteMonitors,
};
