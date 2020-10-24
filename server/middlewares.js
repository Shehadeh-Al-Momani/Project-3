const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const token = req.headers.authorization.split(' ').pop();
  if (!req.headers.authorization) {
    res.status(401);
    res.json("Please login first");
  }
    await jwt.verify(token,process.env.SECRET,(err,result)=>{
    if(err) res.json(err);
    console.log('RESULT: ',result)
    if (result.role === "admin") {
      next();
    } else {
      res.json("Your are not autharize to this action");
    };
  });
};

module.exports = {
  authentication,
  }
