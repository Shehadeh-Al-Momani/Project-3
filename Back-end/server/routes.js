const express = require('express');
const {getAllDBItems,getDepartments,getCategories,getProducts} = require('./controller_get');
const {addDB} = require('./controller_post');
const {discountProducts} = require('./controller_put');
const {deleteProducts} = require('./controller_delete');

const {register,login} = require("./registeration_login")
const {getAll, addProduct, updateProduct, deleteProduct} = require("./CRUD")
const {authentication } = require('./middlewares');
const authRouter = express.Router();

// ==================================== Basic CRUD Operation =========================================

authRouter.get("/allProducts/", getAll)
authRouter.post("/newProduct", addProduct)
authRouter.put("/updateProduct/:id", updateProduct)
authRouter.delete("/deleteProduct/:id", deleteProduct)

// =======================================================================================
authRouter.get('/Electronics/',getDepartments);
authRouter.post('/:id',addDB)
authRouter.post('/register',register);
authRouter.post('/login',login);

authRouter.get('/:id', async (req, res) => {
  try {
    res.json(await getAllDBItems(req.params.id));
  } catch (err) {
    throw err;
  }
})

authRouter.get('/Electronics/:id', async (req, res, next) => {
  try {
    res.json(await getCategories(req.params.id));
  } catch (err) {
    throw err;
  }
});

authRouter.get('/Electronics/:id/:index', async (req, res, next) => {
  try {
    res.json(await getProducts(req.params.id, req.params.index));
  } catch (err) {
    throw err;
  }
});

authRouter.put('/Electronics',discountProducts);

authRouter.delete('/Electronics', authentication, async (req, res, next) => {
  try {
    res.json(await deleteProducts(req.query.version));
  } catch (err) {
    throw err;
  }
});

authRouter.delete('/Electronics/:v ',deleteProducts);

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

