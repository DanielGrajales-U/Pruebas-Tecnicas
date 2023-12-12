const productModel = require('../../models/product/productModel')

const getProductsInStock = async () => {
    try{
        const response = await productModel.find({stock: { $gt: 0}})
        return response
    }catch(error){
        throw error
    }
}

const getProductByName = async (productName) => {
    try {
      const product = await productModel.findOne({ brand: productName });
      return product;
    } catch (error) {
      throw error;
    }
};

module.exports = {
    getProductsInStock,
    getProductByName
}