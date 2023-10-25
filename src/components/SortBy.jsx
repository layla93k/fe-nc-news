import React from "react";

export default function SortBy({ sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <form>
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
      </div>
    </form>
  );
}
