const { getUsers } = require('../../../database/services/user/user.service')
const { errorHandlers } = require('../handlers/errorHandlers');

const getInfoUsers = async (req, res) => {
	try{
		const Users = await getUsers();
		res.status(200).json({
			success: true,
			message: 'Users retrieved successfully',
			data: {Users}
		})
	}catch(error){
		console.log(error)
		res.status(500).json(errorHandlers.internalServerError())
	}
};


module.exports = {
    getInfoUsers
};