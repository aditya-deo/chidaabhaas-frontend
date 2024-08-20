import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./ReadPoem.css";
import Navbar from "./Navbar";
import parse from "html-react-parser";

const ReadPoem = () => {
  const [poemObject, setPoemObject] = useState({});
  const location = useLocation();
  const poemId = location.state.poemId;
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:8080/poem/${poemId}`)
        .then((res) => {
          console.log(res);
          setPoemObject(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [poemId]);

  return (
    <>
      <Navbar />
      <div className="poem-view-container">
        <div className="poem-container">
          <h1 className="poem-title">{poemObject.poemtitle}</h1>
          <p className="author-name">{poemObject.poetname}</p>
          <p className="likes">Likes: {poemObject.numberoflikes}</p>
          <div className="poem-content">
            {parse(JSON.parse(poemObject.poemcontent))}
          </div>
        </div>
        <div className="more-from-author">
          <h2 className="more-title">More from the Poet</h2>
          <ul className="more-list">
            <li>
              <a href="/read/1">Another Poem Title</a>
            </li>
            <li>
              <a href="/read/1">Short Story Title</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReadPoem;
