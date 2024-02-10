import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link, Paper } from "@mui/material";
import Navbar from "./Navbar";

const PoemWriter = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic here to handle the submission of the poem
    console.log("Title:", title);
    console.log("Content:", content);
    // Reset the form after submission
    setTitle("");
    setContent("");
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            maxWidth: 700,
            margin: "auto",
            padding: "2rem",
            paddingTop: "84px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Write a Poem
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              rows={12}
              margin="normal"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
            <Button
              type="submit"
              variant="outlined"
              color="inherit"
              style={{ marginTop: "1rem" }}
            >
              Submit
            </Button>
          </form>
        </Box>
        <Box sx={{ padding: "2rem", minWidth: 400, paddingTop: "84px" }}>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginBottom: "1rem" }}
          >
            Read more from this Poet
          </Typography>
          <Paper variant="outlined" sx={{ padding: "1rem" }}>
            <Typography>
              <Link
                href="/poem/1"
                sx={{
                  display: "block",
                  marginBottom: "0.5rem",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                Poem 1
              </Link>
              <Link
                href="/poem/2"
                sx={{
                  display: "block",
                  marginBottom: "0.5rem",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                Poem 2
              </Link>
              {/* Add more links here */}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default PoemWriter;
