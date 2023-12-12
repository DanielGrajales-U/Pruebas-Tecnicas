
const { getProductsInStock, getProductByName } = require('../../../database/services/product/product.service'); 
const { errorHandlers } = require('../handlers/errorHandlers');

const getProducts = async (req, res) => {
	try{
		const products = await getProductsInStock();
		res.status(200).json({
			success: true,
			message: 'Products retrieved successfully',
			data: {products}
		})
	}catch(error){
		console.log(error)
		res.status(500).json(errorHandlers.internalServerError())
	}
};

module.exports = {
	getProducts,
};