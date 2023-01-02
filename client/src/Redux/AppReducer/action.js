import axios from "axios";
import * as types from "./actiontypes";

export const getAllBlogs = () => (dispatch) => {
  dispatch({ type: types.GET_ALL_BLOG_REQUEST });
  axios
    .get(`http://localhost:8080/blog`)
    // .then((res)=>console.log(res.data.blogs))
    .then((res) => {
      console.log(res.data.blogs);
      dispatch({ type: types.GET_ALL_BLOG_SUCCESS, payload: res.data.blogs });
    })
    .catch((err) => {
      dispatch({ type: types.GET_ALL_BLOG_FAILURE, payload: err });
    });
};

export const getUserBlogs = () => (dispatch) => {
  dispatch({ type: types.GET_USER_BLOG_REQUEST });
  const id = localStorage.getItem("userId");
  console.log(id)
  axios
    .get(`http://localhost:8080/blog/user/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.GET_USER_BLOG_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_BLOG_FAILURE, payload: err });
    });
};
