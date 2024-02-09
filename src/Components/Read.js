import React from "react";
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import { Grid, Container } from "@mui/material";

const Read = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ paddingTop: "2rem" }}>
        <Grid container spacing={3}>
          {[...Array(24)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <PostCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Read;
