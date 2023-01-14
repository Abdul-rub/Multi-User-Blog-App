import * as types from "./actiontypes";

import axios from "axios";
import { GET_ALL_BLOG_SUCCESS } from "../AppReducer/actiontypes";

//SIGN_UP
export const handleSignUp = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  axios
    .post(`https://blogapp-0p1o.onrender.com/user/signup`, payload)
    //    .then((res)=>console.log(res))
    .then((res) => {
      dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.user._id });
    })
    .catch((err) => {
      dispatch({ type: types.SIGNUP_FAILURE, payload: err });
    });
};

//LOGIN
export const handleLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return (
    axios
      .post(`https://blogapp-0p1o.onrender.com/user/login`, payload)
      // .then((res) => console.log(res.data.user._id))

      .then((res) => {
        
        dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.user._id });
        // dispatch({ type: GET_ALL_BLOG_SUCCESS, payload: res.data.blogs });
        // console.log(res.data,"userdata");
      })
      .catch((err) => {
        dispatch({ type: types.LOGIN_FAILURE, payload: err });
      })
  );
};


export const Logout = (dispatch)=>{
    dispatch({type:types.LOGOUT_SUCCESS})
}