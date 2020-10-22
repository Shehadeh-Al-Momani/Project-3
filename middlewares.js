const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { users, roles, ELECTRONICS, laptops, desktops, tablets, monitors, } = require('./models');

const authentication = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401);
    res.json("Please login first");
  }
    await jwt.verify(checkThisToken,process.env.SECRET,(err,result)=>{
    if(err) res.json(err)
    next()
  })
};

const authorization = async (req, res, next) => {  
  const token = req.headers.authorization.split(' ').pop();
  const parsedToken  = await jwt.verify(token, process.env.SECRET)
  if (parsedToken.role === "admin") {
    next();
  } else {
    res.json("Your are not autharize to this action");
  }
};

module.exports = {
  authentication,
  authorization,
  creatComputerComponents,
  creatCellPhones,
}
