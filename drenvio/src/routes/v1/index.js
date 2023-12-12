const { Router } = require('express')
const products = require('./product/products.routes')
const user = require('./user/user.routes')

const routerv1 = Router() 
routerv1.use('/', products)
routerv1.use('/', user)

module.exports = routerv1