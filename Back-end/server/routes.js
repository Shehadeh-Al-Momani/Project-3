const express = require('express');
const {getAllDBItems,getDepartments,getCategories,getProducts} = require('./controller_get');
const {addDB} = require('./controller_post');
const {discountProducts} = require('./controller_put');
const {deleteProducts} = require('./controller_delete');
const {register,login} = require("./registeration_login");
const {getAll, addProduct, updateProduct, deleteProduct} = require("./basic_CRUD_operation");
const {authentication } = require('./autharization');
const authRouter = express.Router();

// ==================================== Registeration & Login =========================================\\
authRouter.post('/register',register);
authRouter.post('/login',login);
// ==================================== Basic CRUD Operation =========================================\\
authRouter.get("/allProducts/", getAll)
authRouter.post("/newProduct", addProduct)
authRouter.put("/updateProduct/:id", updateProduct)
authRouter.delete("/deleteProduct/:id", deleteProduct)
// ====================================== GET Request =================================================\\
authRouter.get('/Electronics/',getDepartments);
authRouter.get('/:id',getAllDBItems)
authRouter.get('/Electronics/:id',getCategories);
authRouter.get('/Electronics/:id/:index',getProducts);
// ====================================== POST Request =================================================\\
authRouter.post('/:id',addDB)
// ====================================== PUT Request =================================================\\
authRouter.put('/Electronics',discountProducts);
// ====================================== DELETE Request =================================================\\
authRouter.delete('/Electronics/:v ',deleteProducts);
// ====================================== Handle Error =================================================\\
authRouter.all("*", (req, res, next) => {
  const newErr = new Error("not found path");
  newErr.status = 404;
  next(newErr);
});
authRouter.use( async (err, req, res, next) => {
  await res.status(err.status).json({
    error: {
      status: err.status,
      message: err.message
    },
  });
});

module.exports = authRouter

