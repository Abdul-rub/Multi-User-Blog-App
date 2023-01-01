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
// import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  // const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs)

  //Sending Request
  // const sendRequest = async (type = "login") => {
  //   const res = axios
  //     .post(`http://localhost:8080/user/${type}`, {
  //       name: inputs.name,
  //       email: inputs.email,
  //       password: inputs.password,
  //     })
  //     .catch((err) => console.log(err));

  //   const data = await res.data;
  //   return data;
  // };

   const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(inputs)
   }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputs);
  //   if (isSignUp) {
  //     sendRequest("signup")
  //       .then(() => dispatch(authActions.login()))
  //       .then(() => navigate("/blogs"))
  //       .then((data) => console.log(data));
  //   } else {
  //     sendRequest()
  //       .then(() => dispatch(authActions.login()))
  //       .then(() => navigate("/blogs"))
  //       .then((data) => console.log(data));
  //   }
  // };

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
