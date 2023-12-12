const { Router }= require('express')
const controller = require('../../../controllers/v1')

const products = Router() 

products.get('/products', controller.getProducts)
products.get('/price/:user_id/:product_name', controller.getPriceForUserAndProductController)

module.exports = products