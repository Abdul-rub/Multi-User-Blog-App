import {
  Button,
  TextField,
  Typography,
  Box,
  inputClasses,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { handleLogin } from "../Redux/AuthReducer/action";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.AuthReducer.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //  console.log(isLoggedIn)

   
  const handleChange = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(inputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(inputs));
    // console.log(inputs);
  };

  useEffect(()=>{
    if(isLoggedIn){
      navigate("/blogs")
    }
   },[isLoggedIn])


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
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
