import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import {useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { AddUserBlogs } from "../Redux/AppReducer/action";

const labelS = { mb: 1, mt: 2, fontSize: "24x", fontWeight: "bold" };

const AddBlog = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
    user: JSON.parse(localStorage.getItem("userId")),
  });
  
  console.log(inputs.user)

  const handleChange = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddUserBlogs(inputs))
    navigate("/myblogs")
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          marginTop={3}
          border={3}
          borderColor="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={"center"}
          >
            Post Your Blog
          </Typography>
          <InputLabel sx={labelS}>Title</InputLabel>
          <TextField
            margin="normal"
            variant="outlined"
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
          />
          <InputLabel sx={labelS}>Description</InputLabel>
          <TextField
            margin="normal"
            variant="outlined"
            name="description"
            value={inputs.description}
            onChange={handleChange}
          />
          <InputLabel type="text" sx={labelS}>
            Image
          </InputLabel>
          <TextField
            margin="normal"
            variant="outlined"
            name="image"
            onChange={handleChange}
            value={inputs.image}
          />
          <Button sx={{mt:2, borderRadius:4}} variant="contained" type="submit">Submit</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
