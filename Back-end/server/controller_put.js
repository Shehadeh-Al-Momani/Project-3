const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
// const { ItemsModel } = require('./../db/items');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');

const discountProducts = async (id) => {
    try {
        const arr = await ProductsModel.find({ price: { $gte: id } });
        arr.map(async (e) => {
            let newPrice = e.price * 0.8;
            return await ProductsModel.updateMany({ price: newPrice });
        });
        return await arr;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    discountProducts,
};
