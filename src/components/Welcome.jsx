import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex-div">
      <p className="welcome">Welcome butter_bridge, please click to log in.</p>
      <Link className="login" to="/articles">
        {" "}
        Log in{" "}
      </Link>
    </div>
  );
}
