const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
// const { ItemsModel } = require('./../db/items');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');


const deleteProducts = async (parms) => {
  try {
    return await ProductsModel.deleteMany({ version: { $lte: parms } })
  } catch (error) {
    throw error;
  }
};

module.exports = {
      deleteProducts,
};
