import React from "react";
import { Link } from "react-router-dom";

export default function FilterBy() {
  return (
    <div className="flex-div">
      <div className="dropdown">
        <button className="dropbtn">Topics</button>
        <div className="dropdown-content">
          <Link to="/articles/football"> Football </Link>
          <Link to="/articles/coding"> Coding </Link>
          <Link to="/articles/cooking"> Cooking </Link>
        </div>
      </div>
    </div>
  );
}
