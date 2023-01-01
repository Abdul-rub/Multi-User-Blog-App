import axios from "axios"
import * as types from "./actiontypes"



export const getAllBlogs =(payload=null)=>(dispatch)=>{
      dispatch({type:types.GET_ALL_BLOG_REQUEST})
       axios.get(`http://localhost:8080/blog`)
      // .then((res)=>console.log(res.data))
      .then((res)=> {dispatch({type:types.GET_ALL_BLOG_SUCCESS})})
      .catch((err)=>{dispatch({type:types.GET_ALL_BLOG_FAILURE})})
}