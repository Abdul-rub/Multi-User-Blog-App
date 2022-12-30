const {Router} = require("express");
const { getAllBlogs, addBlogs, updateBlogs, getById } = require("../controller/blogController");



const blogrouter = Router();

blogrouter.get("/", getAllBlogs)
blogrouter.post("/add", addBlogs)
blogrouter.put("/update/:id",updateBlogs )
blogrouter.get("/:id", getById)


module.exports= blogrouter