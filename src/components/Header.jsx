import React from "react";

export default function Header() {
  return (
    <header className="header" id="flex-div">
      <h1>NC NEWS</h1>
      <div className="logged-in-user">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
        <p>You are signed in as Layla</p>
      </div>
    </header>
  );
}
