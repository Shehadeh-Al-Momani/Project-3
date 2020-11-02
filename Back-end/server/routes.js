const express = require('express');
const {
  addDB,
  register,
  login,
  getAllDBItems,
  getMainElectronics,
  getElectronicsDepartment,
  getElectronicsCategory,
  discountProducts,
  // deleteProducts,
  deleteFirstProducts, 
} = require('./controller');

const { 
  getAll,
  addProduct,
  updateProduct,
  deleteProduct
} = require("./CRUD")
const { authentication } = require('./middlewares');
const authRouter = express.Router();

// ==================================== Basic CRUD Operation =========================================

authRouter.get("/allProducts/", getAll)
authRouter.post("/newProduct", addProduct)
authRouter.put("/updateProduct", updateProduct)
authRouter.delete("/deleteProduct", deleteProduct)

// =======================================================================================
authRouter.get('/Electronics', async (req, res, next) => {
  try {
    res.json(await getMainElectronics());
  } catch (err) {
    throw err;
  }
});

authRouter.post('/:id', async (req, res) => {
  try {
    res.json(await addDB(req.body, req.params.id));
  } catch (err) {
    throw (err);
  }
})

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

authRouter.get('/:id', async (req, res) => {
  try {
    res.json(await getAllDBItems(req.params.id));
  } catch (err) {
    throw err;
  }
})

authRouter.get('/Electronics/:index', async (req, res, next) => {
  try {
    res.json(await getElectronicsDepartment(req.params.index));
  } catch (err) {
    throw err;
  }
});

authRouter.get('/Electronics/:id/:index', async (req, res, next) => {
  try {
    res.json(await getElectronicsCategory(req.params.id, req.params.index));
  } catch (err) {
    throw err;
  }
});

authRouter.put('/Electronics', async (req, res, next) => {
  try {
    res.json(await discountProducts(req.query.price));
  } catch (err) {
    throw err;
  }
});

authRouter.delete('/Electronics', authentication, async (req, res, next) => {
  try {
    res.json(await deleteProducts(req.query.version));
  } catch (err) {
    throw err;
  }
});

authRouter.delete('/Electronics/1', async (req, res, next) => {
  try {
    res.json(await deleteFirstProducts(req.body.price));
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

module.exports = authRouter

