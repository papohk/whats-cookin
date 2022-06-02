const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const {User} = require('./userModel')
const MONGODB_URI = 'mongodb://localhost:27017/cookin'
const deleteUsers = async () => {
    try {
       await User.deleteMany()
       console.log('users are deleted!')
    } catch(error) {
        console.log(error)
    }
}
mongoose.connect(MONGODB_URI, deleteUsers)

