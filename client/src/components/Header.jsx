import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.AuthReducer.isAuth);
  const [value, setValue] = useState();
  const navigate = useNavigate();

  console.log(isLoggedIn);

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogApp</Typography>

        {isLoggedIn ? (
          <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
              <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
            </Tabs>
          </Box>
        ) : (
          ""
        )}

        <Box display="flex" marginLeft="auto">
          {!isLoggedIn ? (
            <>
              <Button
                LinkComponent={Link}
                to="/login"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/signup"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                SignUp
              </Button>
            </>
          ) : (
            ""
          )}

          {isLoggedIn ? (
            <Button
              // onClick={()=>dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/login"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
            >
              LogOut
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
