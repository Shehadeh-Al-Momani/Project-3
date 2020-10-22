const { query } = require('express');
const express = require('express');
const { register,login,getUsers,getElectronicsDepartment, postNewDepartment,getMainElectronics,getElectronicsCategory,postNewProducts, discountProducts, deleteProducts,} = require('./controller');
const {authentication, authorization,} = require('./middlewares');
const authRouter = express.Router();

authRouter.get('/users', async (req, res) => {
  res.json(await getUsers());
});

authRouter.get('/protected', authentication, (req, res) => {
  res.json('You are login');
});

authRouter.post('/register', async (req, res) => {
  try {
    res.json(await register(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    res.json(await login(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.get('/Electronics/',async  (req, res, next) => {
  try {
    res.json(await getMainElectronics());
  } catch (err) {
    throw err;
  }
});

authRouter.get('/Electronics/:index', async (req, res, next) => {
  try {
    res.json(await getElectronicsDepartment(req.params.index));
  } catch (err) {
    throw err;
  }
});

authRouter.get('/Electronics/:id/:index', async (req, res, next) => {
  try {
    res.json(await getElectronicsCategory(req.params.index.toLowerCase()));
  } catch (err) {
    throw err;
  }
});


authRouter.post('/Electronics/:id/:index', async (req, res, next) => {
  try {
    res.json(await postNewProducts(req.body.newProducts,req.params.id.toLowerCase(),req.params.index.toLowerCase()));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/Electronics/:id', async  (req, res, next) => {
  try {
    res.json(await postNewDepartment(req.body.newProducts,req.params.id.toLowerCase()));
  } catch (err) {
    throw err;
  }
});

authRouter.put('/Electronics',async (req, res, next) => {
  try {
    res.json(await discountProducts(req.query.price));
  } catch (err) {
    throw err;
  }
});

authRouter.delete('/Electronics', async(req, res, next) => {
  try {
    res.json(await deleteProducts(req.query.version));
  } catch (err) {
    throw err;
  }
});

authRouter.all("*", (req, res, next) => {
  const newErr = new Error("not found path");
  newErr.status = 404;
  next(newErr);
});
const handleAllNotExist = (err, req, res, next) => {
  res.status(err.status).json({
    error: {
      message: err.message,
    },
  });
};
authRouter.use(handleAllNotExist);

module.exports =authRouter

