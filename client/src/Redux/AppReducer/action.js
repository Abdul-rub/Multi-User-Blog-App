import axios from "axios";
import * as types from "./actiontypes";

//GET ALL BLOGS
export const getAllBlogs = () => (dispatch) => {
  dispatch({ type: types.GET_ALL_BLOG_REQUEST });
  axios
    .get(`http://localhost:8080/blog`)
    // .then((res)=>console.log(res.data.blogs))
    .then((res) => {
      // console.log(res.data.blogs);
      dispatch({ type: types.GET_ALL_BLOG_SUCCESS, payload: res.data.blogs });
    })
    .catch((err) => {
      dispatch({ type: types.GET_ALL_BLOG_FAILURE, payload: err });
    });
};

//GET USER BLOG
export const getUserBlogs = () => (dispatch) => {
  dispatch({ type: types.GET_USER_BLOG_REQUEST });
  const id = JSON.parse(localStorage.getItem("userId"));
  // console.log(id,"gettig useer id")
  axios
    .get(`http://localhost:8080/blog/user/${id}`)
    .then((res) => {
      // console.log(res.data,"ffff")
      dispatch({ type: types.GET_USER_BLOG_SUCCESS, payload: res.data.blogs.blogs });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_BLOG_FAILURE, payload: err });
    });
};

//ADD USER BLOG
export const AddUserBlogs = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_USER_BLOG_REQUEST });
  // const id = JSON.parse(localStorage.getItem("userId"))
  axios
    .post(`http://localhost:8080/blog/add`, payload)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: types.ADD_USER_BLOG_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_USER_BLOG_FAILURE, payload: err });
    });
};


//UPDATE BLOG OF USER

// export const EditUserBlog=(id,payload)=>(dispatch)=>{
//   dispatch({type:types.EDIT_USER_BLOG_REQUEST});
//   return axios.patch(`http://localhost:8080/blog/update/${id}`,payload)
//   .then((res)=>{
//     // console.log(res.data)
//     return dispatch({type:types.EDIT_USER_BLOG_SUCCESS, payload:res.data});
//   })
//   .catch((err)=>{
//     return dispatch({type:types.EDIT_USER_BLOG_FAILURE, payload:err})
//   })
// }

export const EditUserBlog=(id,payload)=>(dispatch)=>{
  dispatch({type:types.EDIT_USER_BLOG_REQUEST});
  return fetch(`http://localhost:8080/blog/update/${id}`,{
    method:"PATCH",
    body: JSON.stringify(payload),
    headers:{"content-type": "application/json"} 
  })
  .then((res)=>res.json())
  .then((res)=>{
    // console.log(res.data)
    return dispatch({type:types.EDIT_USER_BLOG_SUCCESS, payload:res.data});
  })
  .catch((err)=>{
    return dispatch({type:types.EDIT_USER_BLOG_FAILURE, payload:err})
  })
}



//DELETE REQUEST
export const deleteRequest = (id)=>(dispatch)=>{
   dispatch({type:types.DELETE_USER_BLOG_REQUEST});
   return axios.delete(`http://localhost:8080/blog/${id}`)
   .then((res)=>{
    return dispatch({type:types.DELETE_USER_BLOG_SUCCESS})
   })
   .catch((err)=>{
    return dispatch({type:types.DELETE_USER_BLOG_FAILURE})
   })
}