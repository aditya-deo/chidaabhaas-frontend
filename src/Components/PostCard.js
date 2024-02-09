import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";

const PostCard = () => {
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
          Title
        </Typography>
        <Typography variant="body1" paragraph>
          This is a sample post content. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam ultricies varius ex, eget aliquam enim mollis
          sit amet. Sed condimentum tellus vitae odio fermentum, eu mollis
          mauris convallis.
        </Typography>
        <Typography variant="caption" paragraph>
          Posted by: Aditya Deo
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
            <Typography variant="caption">332 likes</Typography>
          </Box>
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
