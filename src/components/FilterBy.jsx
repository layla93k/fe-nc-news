import React from "react";
import { Link } from "react-router-dom";

export default function FilterBy() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Topics</button>
      <div className="dropdown-content">
        <Link to="/articles/topics/football"> Football </Link>
        <Link to="/articles/topics/coding"> Coding </Link>
        <Link to="/articles/topics/cooking"> Cooking </Link>
      </div>
    </div>
  );
}
