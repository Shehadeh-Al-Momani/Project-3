const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');

const getAll = async (req, res) => {
  const arr = await ProductsModel.find();
  const newArr = arr.map((e, i) => { return e.product })
  const unique = [...new Set(newArr)];
  try {
    res.json(await unique);
  }
  catch (err) {
    throw err;
  }
};
// category
// department
const addProduct = async (req, res) => {
  const newProduct = new ProductsModel(req.body);
  newProduct
    .save()
  try {
    res.json(await newProduct);
  }
  catch (err) {
    throw err;
  }
};

const updateProduct = async (req, res) => {
  try {
    res.json(await ProductsModel.findOneAndUpdate({ id: req.params.id }, { price: req.body.price }))
  }
  catch (err) {
    throw err;
  }
};

const deleteProduct = async (req, res) => {
  try {
    res.json(await ProductsModel.findOneAndDelete({ id: req.params.id }))
  }
  catch (err) {
    throw err;
  }
};

const deleteFirstTask=(req, res)=>{
  ProductsModel.findOneAndDelete(
    {}
  )
    .then((result) => {
      res.json('success delete first task');
    })
    .catch((err) => {
      console.log('ERR: ', err);
      res.json(err);
    });
}

module.exports = {
  getAll,
  addProduct,
  updateProduct,
  deleteProduct,
};
