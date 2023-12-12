const User = require('../../models/user/userModel')

const getUsers = async () => {
    try{
        const response = await User.find({})
        return response
    }catch(error){
        throw error
    }
}

const getUserById = async (userId) => {
    try{
        const response = await User.findById(userId)
        return response
    }catch(error){
        throw error
    }
}

module.exports = {
    getUsers,
    getUserById
}