const Blog = require("../model/blogModel")


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


const addBlogs = async(req,res,next)=>{
   const {title,description,image,user}= req.body
   const blog=  new Blog({
    title,
    description,
    image,
    user
   });
   try {
     await blog.save()
   } catch (error) {
    return console.log(err)
   }
   return res.status(200).json({blog})
}

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

const getById=()=>{

}

module.exports = {getAllBlogs,addBlogs,updateBlogs,getById}