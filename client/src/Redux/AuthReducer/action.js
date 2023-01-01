import * as types from "./actiontypes"
import axios from "axios"


//SIGN_UP
export const handleSignUp=(payload)=>(dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST})
     axios.post(`http://localhost:8080/user/signup`,payload)
//    .then((res)=>console.log(res))
   .then((res)=>{dispatch({type:types.SIGNUP_SUCCESS,payload:res.data})})
   .catch((err)=> {dispatch({type:types.SIGNUP_FAILURE, payload:err})})
}






//LOGIN
export  const handleLogin=(payload)=>(dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST})
    return axios
    .post(`http://localhost:8080/user/login`,payload)
    // .then((res)=>console.log(res))
    .then((res)=>{ dispatch({type:types.SIGNUP_SUCCESS,payload:res.data})})
    .catch((err)=> {dispatch({type:types.SIGNUP_FAILURE, payload:err})})
}

