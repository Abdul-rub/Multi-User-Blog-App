const mongoose = require('mongoose')


const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String, required: true, unique:true},
    password:{type:String, required: true, minlength:5},
    blogs:[{type: mongoose.Types.ObjectId, ref: "blog", required:true}]

})

const userModel = mongoose.model("user", userSchema)


module.exports = userModel