import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../Redux/AppReducer/action";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Blogs = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.AppReducer.data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);

  useEffect(() => {
    dispatch(getAllBlogs())
    },[dispatch]);


  return (
    <>
      {isLoading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <CircularProgress />
          <Typography variant="h3">Loading....</Typography>
        </Box>
      ) : (
        <SimpleGrid
          columns={[1, 2, 3]}
          borderRadius={"3xl"}
          spacing="20px"
          p={"1rem"}
        >
          {blog &&
            blog.length !== 0 &&
            blog.map((el, i) => {
              return (
                <BlogCard
                  id={el._id}
                  isUser={
                    JSON.parse(localStorage.getItem("userId")) === el.user._id
                  }
                  key={i}
                  description={el.description}
                  image={el.image}
                  title={el.title}
                  username={el.user.name}
                />
              );
            })}
        </SimpleGrid>
      )}
    </>
  );
};

export default Blogs;
