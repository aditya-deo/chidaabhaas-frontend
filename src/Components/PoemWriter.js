import React, { useState, useRef } from "react";
import { Box, Typography, Link, Paper, Button } from "@mui/material";
import Navbar from "./Navbar";
import axios from "axios";
import JoditEditor from "jodit-react";

const PoemWriter = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false, // All options from https://xdsoft.net/jodit/doc/
    height: "70vh", // Set a fixed height in pixels
    // Define your toolbar buttons here
    buttons: [
      "source",
      "|",
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "ul",
      "ol",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "|",
      "align",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "|",
      "fullsize",
    ],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var poemObject = {
      poemTitle: "title",
      poemContent: JSON.stringify(content),
    };
    axios
      .post("http://localhost:8080/write/submitpoem", poemObject)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            maxWidth: 1000,
            margin: "auto",
            padding: "2rem",
            paddingTop: "84px",
            width: "100%",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Write a Poem
          </Typography>
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            config={config}
          />
          <Button
            sx={{
              color: "#000000",
              marginTop: "10px",
              width: "100%",
              border: "1px solid #d5d5d5",
            }}
            onClick={handleSubmit}
          >
            Publish
          </Button>
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
