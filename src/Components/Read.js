import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import { Grid, Container } from "@mui/material";
// import axios from Axios;
import axios from "axios";
const Read = ({ setUser, user }) => {
  const [PostCards, SetPostCards] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:8080/read/1", {
          withCredentials: true, // This ensures the cookie is sent along with the request
        })
        .then((res) => {
          SetPostCards(res.data.data);
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [setUser]);

  return (
    <>
      <Navbar user={user} />
      <Container key="gridContainer" maxWidth="lg" sx={{ paddingTop: "85px" }}>
        <Grid container spacing={3}>
          {PostCards.map((postCardData, index) => (
            <>
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <PostCard PostCardData={postCardData} />
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Read;
