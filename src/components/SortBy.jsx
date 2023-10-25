import React from "react";

export default function SortBy({ sort, setSort, setSortSelected }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSortSelected(true);
  };
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="dropdown-sortby">
        <label>
          {" "}
          Sort by..
          <div className="dropdown-content-sortby"></div>
          <select value={sort} onChange={handleChange}>
            <option value="created_at">Date</option>

            <option value="comment_count">Comment count</option>

            <option value="votes">Votes</option>
          </select>
        </label>
        <button className="dropbtn-sortby">Sort!</button>
      </div>
    </form>
  );
}
