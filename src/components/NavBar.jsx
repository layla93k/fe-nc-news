import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar" id="flex-div">
      <Link to="/"> Home </Link> |<Link to="/articles"> Articles </Link>
    </nav>
  );
}
