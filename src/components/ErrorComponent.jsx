import React from "react";
import { Link } from "react-router-dom";

export default function ErrorComponent({ setError, setErr }) {
  const handleClick = ({ setError, setErr }) => {
    setError(false);
    setErr(false);
  };
  return (
    <>
      <h1 className="error-emoji">😞</h1>
      <h2 className="errorcomponent-msg">
        Sorry I can't find the page you are looking for!
      </h2>
      <button className="articles-btn" onClick={handleClick}>
        <Link to="/articles"> Back to articles </Link>
      </button>
    </>
  );
}
