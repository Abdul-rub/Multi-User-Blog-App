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

import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./components/Error";

function App() {
  const dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state.AuthReducer.isAuth);
  console.log(isLoggedIn, "Bye");

  useEffect(() => {
    const accessToken = localStorage.getItem("userId");
    if (accessToken) {
      dispatch(handleLogin(accessToken));
    }
  }, [dispatch]);

  // if (isLoggedIn) {
  //   console.log("Me ninja hatori");
  //   navigate("/blogs");
  // }

  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
      
        <Route path="/login" element={<PrivateRoute><Login /></PrivateRoute>} />
        <Route path="/signup" element={<Signup />} />
        

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myblogs" element={<UserBlogs />} />
        <Route path="/myblogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/add" element={<AddBlog />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
