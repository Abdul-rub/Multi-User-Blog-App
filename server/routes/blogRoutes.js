const {Router} = require("express");
const { getAllBlogs, addBlogs, updateBlogs, getById, deleteBlog, getByUserId } = require("../controller/blogController");



const blogrouter = Router();

blogrouter.get("/", getAllBlogs)
blogrouter.post("/add", addBlogs)
blogrouter.patch("/update/:id",updateBlogs)
blogrouter.get("/:id", getById)
blogrouter.delete("/:id", deleteBlog)
blogrouter.get('/user/:id', getByUserId)


module.exports= blogrouter