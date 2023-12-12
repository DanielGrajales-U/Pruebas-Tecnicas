const { getProductByName } = require('./product.service');
const { getUserById } = require('../user/user.service');

const getPriceForUser = async (userId, productName) => {
  try {
    // Buscar el producto por el nombre
    const product = await getProductByName(productName);
    console.log(product)

    if (!product) {
      throw new Error('Product not found');
    }

    // Buscar el usuario por el ID
    const user = await getUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Verificar si el usuario tiene un precio especial para la marca del producto
    const specialPrice = user.special_price.find(sp => sp === product.brand);

    // Si hay un precio especial, devolverlo; de lo contrario, devolver el precio base
    const priceToReturn = specialPrice !== undefined ? product.special_price : product.base_price;

    return priceToReturn;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = {
  getPriceForUser
};