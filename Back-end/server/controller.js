const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles, products } = require('./../models');
const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
// const { ItemsModel } = require('./../db/items');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');
const SALT = Number(process.env.SALT);


const getDepartments = async () => {
  //{return await ProductsModel.find().distinct('department');}
  const arr = await ProductsModel.find();
  const newArr = arr.map((e, i) => { return e.department })
  const unique = [...new Set(newArr)];
  return await unique;
}
// category
// department
//product

//distinct('category')


//*************************************************************************************************\\
const addDB = async (body, schema) => {
  let document = {}, departmentList = {}, categoryList = {};
  if (schema === "product") {
    document = new ProductsModel(body);
    departmentList = new DepartmentsModel({ id: body.id, department: body.department });
    categoryList = new CategoriesModel({ id: body.id, department: body.department, category: body.category });
  }
  if (schema === "user") {
    document = new UsersModel(body);
  } if (schema === "role") {
    document = new RolesModel(body);
  }
  console.log('xxxxxxxxxxxxxxxxx :', await ProductsModel.find({ id: document.id }))
  departmentList.save()
  categoryList.save()
  document.save()
  try {
    console.log('document :', document)
    return await "Successfully Added";
  }
  catch (err) {
    throw err;
  }
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
    return await newUser;
  } else {
    return 'User already exists';
  }
};

const login = async (user) => {
  const savedUser = users.filter((element) => element.email === user.email);
  if (!savedUser.length) {
    return 'User Not Found please register';
  } else {
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
      const savedRole = roles.filter((element) => element.id === savedUser[0].role_id);
      const payload = {
        email: savedUser[0].email,
        role: savedRole[0].type,
      };
      return await jwt.sign(payload, process.env.SECRET);
    } else {
      return 'Username or password not correct';
    }
  }
};

const getAllDBItems = async (model) => {
  try {
    if (model === "products") return await ProductsModel.find({});
    if (model === "users") return await UsersModel.find({});
    if (model === "roles") return await RolesModel.find({});
  } catch (error) {
    console.log('ERR: ', err);
    throw err;
  }
};

const getCategories = async (id) => {
  // return await CategoriesModel.find({ department: id }).distinct('category');
  const arr = await ProductsModel.find({ department: id });
  const newArr = arr.map((e) => { return e.category; })
  return await [...new Set(newArr)];
};

const getProducts = async (id, index) => {
  const arr = await ProductsModel.find({ department: id, category: index });
  const newArr = arr.map((e) => { return `${e.product} : ${e.price}` })
  return await [...new Set(newArr)];
};

// const discountProducts = async (id) => {
// let doc = ProductsModel.find({ price: { $gte: id } });

// // db.collection.findOne({ 
// //   "_id": ObjectId("5308595e3256e758757b4d2f") 
// // });
// const arr = doc.forEach(function(e) {e.price*= 0.8});
// ProductsModel.update(
//  { "price": doc.price },
//  { "$set": { "price": doc } });
// return await arr;
// };

const discountProducts = async (id) => {
   // return await ProductsModel.find({ price: { $gte: id } }).updateMany({ price: this.price*0.8 });
  // const arr = await ProductsModel.updateMany({ price: { $gte: id } }, { $set: { "price" : "price" * 0.8}} );
  // const newArr = arr.map((e) => { return `${e.product} : ${e.price * 0.8}` });
  // return await arr;
try {
  let doc = await ProductsModel.find({ price: { $gte: id } });
  console.log('doc :', doc)
  let arr = doc.map((e)=> { return e.price*= 0.8});
  console.log('arr :', arr)
  let document =ProductsModel.updateMany(
   { "price": doc.price },
   { "$set": { "price": doc } });
  return await document;
}
catch (err) {
  throw err;
}
};

// const deleteProducts = async (body) => {
//   const deleted = [];
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].version <= body) {
//       products.splice(i, 1);
//       deleted.push(products.splice(i, 1));
//     }
//   }
//   return await deleted;
// };

const deleteFirstProducts = async (body) => {
  return await ProductsModel.findOneAndDelete({ price: body },)
};

// const updateOneProduct = (req, res) => {
//   console.log('PARAMS: ', req.params);
//   console.log('BODY: ', req.body);
//   // {title:'ships',price=>20}
//   Product.findOneAndUpdate(
//     { title: req.params.title },
//     { price: req.body.newPrice }
//   )
//     .then((result) => {
//       // console.log('RESULT: ',result)
//       res.json('Success update ');
//     })
//     .catch((err) => {
//       console.log('ERR: ', err);
//       res.json(err);
//     });
// };

// const deleteFirstProducts =  (req, res) => {
//   ProductsModel.findOneAndDelete({ price: req.body.price })  
//     .then((result) => {
//        res.json('Success delete 1 item ');
//     })
//     .catch((err) => {
//        res.json(err);
//     });
// };


module.exports = {
  addDB,
  register,
  login,
  getAllDBItems,
  getDepartments,
  getCategories,
  getProducts,
  discountProducts,
  // deleteProducts,
  deleteFirstProducts
};
