import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import Orderby from "./Orderby";
import SortBy from "./SortBy";
import UserIcon from "./UserIcon";
import FilterBy from "./FilterBy";

export default function NavBar({
  sort,
  setSort,
  order,
  setOrder,
  topicName,
  setTopicName,
}) {
  return (
    <>
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
          <li>
            <FilterBy topicName={topicName} setTopicName={setTopicName} />
          </li>
        </ul>
      </nav>

      <UserIcon />
    </>
  );
}
