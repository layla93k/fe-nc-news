import React from "react";
import { Link } from "react-router-dom";

export default function UserIcon() {
  return (
    <div className="logged-in-user">
      <button>
        <Link to="/">Log out</Link>
      </button>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
      <p>You are signed in as tickle122</p>
    </div>
  );
}
