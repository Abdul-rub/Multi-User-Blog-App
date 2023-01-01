import React from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  inputClasses,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSignUp } from "../Redux/AuthReducer/action";
import { useEffect } from "react";


const Signup = () => {
  const isLoggedIn = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSignUp(inputs));
 
    console.log(inputs);
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
            SignUp
          </Typography>

          <TextField
            name="name"
            onChange={handleChange}
            margin="normal"
            // value={inputs.name}
            placeholder="name"
          ></TextField>

          <TextField
            name="email"
            onChange={handleChange}
            margin="normal"
            // value={inputs.email}
            type="email"
            placeholder="Email"
          ></TextField>

          <TextField
            name="password"
            onChange={handleChange}
            margin="normal"
            // value={inputs.password}
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
            // onClick={() => setIsSignUp(!isSignUp)}
            sx={{ borderRadius: 3, marginTop: 3 }}
            onClick={() => navigate("/login")}
          >
            Change To Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
