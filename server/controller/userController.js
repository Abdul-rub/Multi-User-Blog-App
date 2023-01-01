const User = require("../model/userModel")
const bcrypt = require("bcryptjs")

//GET ALL USERS
 const getAllUser = async(req,res,next)=>{
    let users;
    try {
        users = await User.find()
    } catch (error) {
        console.log(err)
    }
    if(!users){
        return res.status(404).json({msg:"No User Found"})
    }
    return res.status(200).json({users})
}


//SIGNUP
const signUp =async(req,res,next)=>{
    const {name,email,password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
       return console.log(error)
    }
    if(existingUser){
        return res.status(400).json({msg: "User Already Exists"})
    }

    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs:[]
    });
   
    try {
       await user.save()
    } catch (error) {
       return console.log(error)
    }
    return res.status(201).json({user})
}


//LOGIN
const login=async(req,res,next)=>{
    const {email,password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
       return console.log(error)
    }
    if(!existingUser){
        return res.status(404).json({msg: "Coult not found user with this Email"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({msg:"Incorrect Password"})
    }
    return res.status(200).json({msg:"Login Successfull", user:existingUser})

}



module.exports = {getAllUser,signUp,login}