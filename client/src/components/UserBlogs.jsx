import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBlogs } from "../Redux/AppReducer/action";
import BlogCard from "./BlogCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SimpleGrid } from "@chakra-ui/react";

const UserBlogs = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.AppReducer.userblog);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  // console.log(blog, "blog");

  useEffect(() => {
    dispatch(getUserBlogs());
  }, []);

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
            blog.map((el, i) => {
              return (
                <BlogCard
                  id={el._id}
                  key={i}
                  isUser={true}
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

export default UserBlogs;
