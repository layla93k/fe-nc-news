import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <p>Welcome butter_bridge, please click to log in.</p>
      <Link to="/articles"> Log in </Link>
    </>
  );
}
