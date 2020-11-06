const { ProductsModel } = require('./../db_schema/productsSchema');

//===================================================================================\\
const discountProducts = async (req, res) => {
    const id = req.query.price;
    const disc = req.query.discont;
    try {
        const arr = await ProductsModel.find({ price: { $gte: id } });
        arr.map(async (e) => {
            let newPrice = e.price * disc;
            return await ProductsModel.updateMany({ price: newPrice });
        });
        res.json(await arr);
    } catch (err) {
        throw err;
    }
};
//===================================================================================\\

module.exports = {
    discountProducts,
};
