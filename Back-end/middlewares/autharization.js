const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const token = req.headers.authorization.split(' ').pop();
  if (!req.headers.authorization) {
    res.status(401);
    res.json("Please login first");
  }
  try {
    const parserToken = await jwt.verify(token, process.env.SECRET);
    if (parserToken.role[0].type === "admin") {
      next();
    } else {
      res.json("Your are not autharize to this action");
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  authentication,
  }
