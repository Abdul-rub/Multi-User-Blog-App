import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import BlogCard from './BlogCard'


const Blogs = () => {
  const [blog,setBlog]= useState()


  const getAllBlogs = ()=>{
    axios.get(`http://localhost:8080/blog`)
    .then((res)=>setBlog(res.data))
    .catch((err)=>console.log(err))
  }




useEffect(()=>{
getAllBlogs()
},[])
console.log(blog)

  return (
    <div>
     {blog && blog.map((el,i)=>{
      return(
        <BlogCard />
      )
     }) }
    </div>
  )
}

export default Blogs