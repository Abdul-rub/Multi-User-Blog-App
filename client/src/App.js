import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./components/Signup";
import { useEffect } from "react";
import { handleLogin } from "./Redux/AuthReducer/action";

function App() {
  const dispatch = useDispatch()
  let isLoggedIn = useSelector((state) => state.AuthReducer.isAuth);
  console.log(isLoggedIn);

  // useEffect(()=>{
  //  if(localStorage.getItem("userId")){
  //   isLoggedIn=true;
  //  }
   
  // },[])

  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        {!isLoggedIn ? ( 
          <>
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <>
          
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/myblogs" element={<UserBlogs />} />
            <Route path="/myblogs/:id" element={<BlogDetails />} />
            <Route path="/blogs/add" element={<AddBlog />} />{" "}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
