import React, { useEffect } from "react";
import {SimpleGrid} from"@chakra-ui/react"
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../Redux/AppReducer/action";

const Blogs = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.AppReducer.data);

  // console.log(blog)

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  // console.log(blog);
  //  const isUser = JSON.parse(localStorage.getItem("userId"))
  //  console.log(isUser)
  
  //  const isData = blog.user._id;
  //  console.log(isData)

  return (
    <SimpleGrid columns={[1, 2, 3]} borderRadius={'3xl'} spacing='20px' p={'1rem'} 
// style={{display:'grid', gridTemplateColumns:"repeat(4,1fr)" , gap:"15px", padding:"1rem"}}
>
      {blog &&
        blog.map((el, i) => {
          // console.log(el.user._id)
          return (
            <BlogCard
            id= {el._id}
              isUser={JSON.parse(localStorage.getItem("userId")) === el.user._id}
              key={i}
              description={el.description}
              image={el.image}
              title={el.title}
              username={el.user.name}
            />
          );
        })}
    </SimpleGrid>
  );
};

export default Blogs;
