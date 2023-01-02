import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const labelS = { mb: 1, mt: 2, fontSize: "24x", fontWeight: "bold" };

const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange=(e)=>{
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

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
          <InputLabel name="title" onChange={handleChange} value={inputs.title} sx={labelS}>Title</InputLabel>
          <TextField  margin="normal" variant="outlined" />
          <InputLabel  name="description" onChange={handleChange} value={inputs.description} sx={labelS}>Description</InputLabel>
          <TextField margin="normal" variant="outlined" />
          <InputLabel name="image" onChange={handleChange} value={inputs.image} sx={labelS}>Image</InputLabel>
          <TextField margin="normal" variant="outlined" />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
