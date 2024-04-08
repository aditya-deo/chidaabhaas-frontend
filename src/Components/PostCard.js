import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  return (
    <Card
      sx={{
        marginBottom: "1rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        border: "1px solid black",
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {props.PostCardData.PoemTitle}
        </Typography>
        <Typography variant="body1" paragraph>
          {props.PostCardData.PoemContent.trim().substring(0, 150)}...
        </Typography>
        <Typography variant="caption" paragraph>
          Posted by: {props.PostCardData.Poet.Username}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FavoriteBorderIcon sx={{ color: "black", margin: "5px" }} />
            <Typography variant="caption">
              {props.PostCardData.NumberOfLikes} likes
            </Typography>
          </Box>
          <Link
            to={`/poem/${props.PostCardData._id}`}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "default",
            }}
            state={{ poemId: props.PostCardData._id }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                color: "black",
                borderColor: "black",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              Read More
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
