const mongoose = require('mongoose')

// SCHEMA DEFINITION
const userSchema = mongoose.Schema({
    name : String ,
    email : {type : String , required : true} ,
    age : Number ,
    address : String
})

const User = mongoose.model("User", userSchema)
module.exports = User 