
const { getPriceForUserAndProductController } = require('./products/price.controller')
const { getProducts } = require('./products/product.controller')
const { getInfoUsers } = require('./user/user.controller')

module.exports = {
    getProducts,
    getPriceForUserAndProductController,
    getInfoUsers
}