const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { users, roles, ELECTRONICS, laptops, desktops, tablets, monitors, } = require('./models');
const SECRET = process.env.SECRET;
// Authentication
// Authorization

const middleware = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401);
    res.json("Please login first");
  }
  const token = req.headers.authorization.split(' ').pop();
  await jwt.verify(token, SECRET, (err, parsedToken) => {
    if (err) res.json(err);
    console.log('parsedToken: ', parsedToken);
    if (parsedToken.role === "admin") {
      next();
    } else {
      res.json("Your are not autharize to this action");
    }
  })
};

const creatComputerComponents = (req, res, next) => {
  const computerComponents = [{ discription: "Computer Components" }];
  for (k in req.body) {
    computerComponents.push({ id: k, product: req.body[k].product, price: req.body[k].price });
  }
  ELECTRONICS[0].departments.push(computerComponents)
  next();
};


const creatCellPhones = (req, res, next) => {
  ELECTRONICS.push({ id: ELECTRONICS.length, category: req.body.category, departments: [] })
  const samsung = [{ discription: "SAMSUNG" }];
  const objSamsung = req.body.samsung
  for (k in objSamsung) {
    samsung.push({ id: k, product: objSamsung[k].product, price: objSamsung[k].price });
  }
  ELECTRONICS[ELECTRONICS.length - 1].departments.push(samsung)

  const iphon = [{ discription: "IPHONE" }];
  const objIphon = req.body.iphon
  for (k in objIphon) {
    iphon.push({ id: k, product: objIphon[k].product, price: objIphon[k].price });
  }
  ELECTRONICS[ELECTRONICS.length - 1].departments.push(iphon)

  const huawei = [{ discription: "HUAWEI" }];
  const objHuawei = req.body.huawei
  for (k in objHuawei) {
    huawei.push({ id: k, product: objHuawei[k].product, price: objHuawei[k].price });
  }
  ELECTRONICS[ELECTRONICS.length - 1].departments.push(huawei)
  next();
};

module.exports = {
  middleware,
  creatComputerComponents,
  creatCellPhones,
}