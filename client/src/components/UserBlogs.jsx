import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBlogs } from "../Redux/AppReducer/action";
import BlogCard from "./BlogCard";

const UserBlogs = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.AppReducer.userblog);
  console.log(blog, "blog");

  useEffect(() => {
    dispatch(getUserBlogs());
  }, []);

  return (
    <div>
      {blog &&
        blog.map((el, i) => {
          return (
            <BlogCard
              key={i}
              isUser={true}
              description={el.description}
              image={el.image}
              title={el.title}
              username={el.user.name}
            />
          );
        })}
    </div>
  );
};

export default UserBlogs;
