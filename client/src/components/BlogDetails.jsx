import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { EditUserBlog } from "../Redux/AppReducer/action";
const labelS = { mb: 1, mt: 2, fontSize: "24x", fontWeight: "bold" };

const BlogDetails = () => {
  const [blog, setBlog] = useState();
  const {id} = useParams()
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch()
  const navigate= useNavigate()

  
  const handleChange = (e) => {
    setInputs((state)=>({
      ...state,
      [e.target.name]: e.target.value,
    }))
  };
  

  const fetchDetails = async () => {
  const res = await axios
      .get(`http://localhost:8080/blog/${id}`)
      // .catch((err) => console.log(err));
      const data = await res.data;
      return data;
  };
  // console.log(blog);

  useEffect(()=>{
    fetchDetails().then((data)=>{
      setBlog(data.blog)
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
      })
    })
  },[id])

  //  const updateRequest = async ()=>{
  //   const res = axios.put(`http://localhost:8080/blog/update/${id}`,{
  //     title : inputs.title,
  //     description: inputs.description
  //   }).catch((err)=>console.log(err))

  //   const data = await res.data
  //   return data
  //  }
   

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs)
    dispatch(EditUserBlog(id,inputs))
    navigate("/blogs")
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
            Edit Your Blog
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
          {/* <InputLabel type="text" sx={labelS}>
            Image
          </InputLabel>
          <TextField
            margin="normal"
            variant="outlined"
            name="image"
            onChange={handleChange}
            value={inputs.image}
          /> */}
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BlogDetails;
