const { default: mongoose } = require("mongoose");
const Blog = require("../model/blogModel")
const User = require("../model/userModel")

//GET ALL BLOG
const getAllBlogs=async(req,res,next)=>{
   let blogs;
   try {
       blogs = await Blog.find();
   } catch (error) {
    return console.log(error)
   }
   if(!blogs){
    return res.status(404).json({msg:"No Blogs Found"})
   }
   return res.status(200).json({blogs})
}

//ADD BLOG  TO SPECIFIC ID
const addBlogs = async(req,res,next)=>{
   const {title,description,image,user}= req.body
    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        return console.log(error)
    }
    if(!existingUser){
        return res.status(400).json({msg:"Unable to find User by id"})
    }

   const blog=  new Blog({
    title,
    description,
    image,
    user
   });
   try {
    const session = await mongoose.startSession();
    session.startTransaction()
    await blog.save({session})
    existingUser.blogs.push(blog)
    await existingUser.save({session})
    await session.commitTransaction()
   } catch (error) {
    return res.status(500).json({msg:error})
   }
   return res.status(200).json({blog})
}

//UPDATE BLOG
const updateBlogs= async(req,res,next)=>{
    const {title,description}= req.body
   const blogId = req.params.id;
   let blog;
   try {
    blog = await Blog.findByIdAndUpdate(blogId,{title,description})
   } catch (error) {
     return console.log(error)
   }

   if(!blog){
    return res.status(500).json({msg:"Unable to update Blog"})
   }
   return res.status(200).json({blog})
   
}

//GET BLOG BY ID
const getById=async(req,res,next)=>{
   const id = req.params.id;
   let blog;
   try {
     blog= await Blog.findById(id)
   } catch (error) {
    return console.log(error)
   }
   if(!blog){
    return res.status(404).json({msg: "No Blog Found"})
   }
   return res.status(200).json({blog})
}

//DELETE BLOG BY ID
const deleteBlog= async(req,res,next)=>{
    const id = req.params.id;
   let blog;
   try {
    blog = await Blog.findByIdAndRemove(id).populate('user')
    await blog.user.blogs.pull(blog);
    await blog.user.save()   
} catch (error) {
    return console.log(error)
   }
   if(!blog){
    return res.status(500).json({msg: "Unable to delete"})
   }
   return res.status(200).json({msg:"Deleted Successfully"})
}



const getByUserId = async(req,res,next)=>{
    const userId = req.params.id;
    let userBlogs;
    try {
        userBlogs = await User.findById(userId).populate("blog")
    } catch (error) {
        return console.log(error)
    }
    if(!userBlogs){
        return res.status(404).json({msg:"No Blog Found"})
    }
    return res.status(200).json({blogs:userBlogs})
}


module.exports = {getAllBlogs,addBlogs,updateBlogs,getById,deleteBlog,getByUserId}