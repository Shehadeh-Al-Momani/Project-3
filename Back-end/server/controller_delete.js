const { ProductsModel } = require('./../db/productsSchema');

const deleteProducts = async (req, res, next) => {
    const parms = req.params.v;
    try {
        res.json(await ProductsModel.deleteMany({ version: { $lte: parms } }));
    } catch (error) {
        throw error;
    }
};

module.exports = {
    deleteProducts,
};
