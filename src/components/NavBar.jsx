import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import Orderby from "./Orderby";
import SortBy from "./SortBy";

export default function NavBar({ sort, setSort, order, setOrder }) {
  return (
    <nav className="navbar" id="flex-div">
      <ul className="navBar">
        <li>
          <Link to="/"> Home </Link> |
        </li>
        <li>
          <Link to="/articles"> Articles </Link>
        </li>
        <li>
          <SortBy sort={sort} setSort={setSort} />
        </li>
        <li>
          <Orderby order={order} setOrder={setOrder} />
        </li>
      </ul>
    </nav>
  );
}
