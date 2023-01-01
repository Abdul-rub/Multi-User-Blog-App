import React, { useEffect } from 'react'

import BlogCard from './BlogCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../Redux/AppReducer/action'

const Blogs = () => {
  const dispatch = useDispatch()
  const blog = useSelector((state)=>state.AppReducer.data)




useEffect(()=>{
  dispatch(getAllBlogs())
},[])


console.log(blog)

  return (
    <div>
     {blog && blog.map((el,i)=>{
      return <BlogCard description={el.description} image ={el.image} title={el.title} username={el.user.name} />
      
     })}
    </div>
  )
}

export default Blogs