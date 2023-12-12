const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    brand: String,
    base_price: Number,
    stock: Number,
    special_price: Number
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product