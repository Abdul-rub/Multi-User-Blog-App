import {
  Button,
  TextField,
  Typography,
  Box,
  inputClasses,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs)



   const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(inputs)
   }

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={6}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            Login
          </Typography>
          
          <TextField
            name="email"
            onChange={handleChange}
            margin="normal"
            value={inputs.email}
            type="email"
            placeholder="Email"
          ></TextField>

          <TextField
            name="password"
            onChange={handleChange}
            margin="normal"
            value={inputs.password}
            type="password"
            placeholder="Password"
          ></TextField>

          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning">
            Submit
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            sx={{ borderRadius: 3, marginTop: 3 }}>
            Change To Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
