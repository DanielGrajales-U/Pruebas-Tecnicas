const { getPriceForUser } = require("../../../database/services/product/price.service");

const getPriceForUserAndProductController = async (req, res) => {
    const { user_id, product_name } = req.params;
    try {
      const price = await getPriceForUser(user_id, product_name)
  
      res.status(200).json({
        success: true,
        data: {
          price,
        },
      });
    } catch (error) {
      console.error(error.message);
  
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
      });
    }
  };

  module.exports = {
    getPriceForUserAndProductController
  }