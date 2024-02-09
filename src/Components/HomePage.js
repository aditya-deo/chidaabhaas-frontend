import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Link
      to={`read/1`}
      style={{ textDecoration: "none", color: "black", cursor: "default" }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", marginRight: "5px" }}
      >
        <div className="container text-center">
          <div className="jumbotron jumbotron-fluid">
            <h1 className="display-1">चिदाभास</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
