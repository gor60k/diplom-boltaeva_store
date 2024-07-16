const {
    Product,
} = require('../models/models');

class filterController {
    async getAll(req, res) {
        let {
            type,
            brand
        } = req.query;
        let product;
        if (type == 'undefined') {
            product = await Product.findAll({
                where: {
                    brandId: brand,
                }
            });
        } else if (brand == 'undefined') {
            product = await Product.findAll({
                where: {
                    typeId: type
                }
            });
        } else {
            product = await Product.findAll({
                where: {
                    brandId: brand,
                    typeId: type
                }
            });
        }
        return res.json(product)
    }
}

module.exports = new filterController()