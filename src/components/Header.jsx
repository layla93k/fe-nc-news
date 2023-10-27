import React from "react";
import "../Header.css";
import UserIcon from "./UserIcon";

export default function Header() {
  return (
    <header className="header" id="flex-div">
      <h1>NC NEWS</h1>
      <UserIcon />
    </header>
  );
}
