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
          {props.PostCardData.poemtitle}
        </Typography>
        <Typography variant="body1" paragraph>
          {props.PostCardData.poemcontent.trim().substring(0, 150)}...
        </Typography>
        <Typography variant="caption" paragraph>
          Posted by: {props.PostCardData.poet}
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
              {props.PostCardData.numberoflikes} likes
            </Typography>
          </Box>
          <Link
            to={`/poem/${props.PostCardData.poemid}`}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "default",
            }}
            state={{ poemId: props.PostCardData.poemid }}
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
