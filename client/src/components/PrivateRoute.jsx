import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  let isLoggedIn = useSelector((state) => state.AuthReducer.isAuth);
  if (isLoggedIn) {
    return navigate("/");
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
