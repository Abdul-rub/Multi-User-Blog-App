import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRequest } from "../Redux/AppReducer/action";

const BlogCard = ({ title, description, image, username, isUser, id }) => {
  // console.log(title, isUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/myblogs/${id}`);
  };


  const handleDelete = () => {
    dispatch(deleteRequest(id))
    .then(() => navigate("/blogs"));
  };

  return (
    <Card
      sx={{
        mt: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {isUser && (
        <Box display="flex">
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <ModeEditIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      )}

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {username ? username.charAt(0) : ""}
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={image} alt="images" />
      <CardContent>
        <hr />
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>{username}</b>
          {":"}
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
