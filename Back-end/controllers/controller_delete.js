const { ProductsModel } = require('./../db_schema/productsSchema');

const deleteProducts = async (req, res) => {
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
