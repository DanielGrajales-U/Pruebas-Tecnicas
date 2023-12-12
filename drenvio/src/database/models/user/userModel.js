const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    special_price: {
        type: [String]
    }
    
})

const User = mongoose.model('User', userSchema)

module.exports = User