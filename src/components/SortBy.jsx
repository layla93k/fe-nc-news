import React from "react";

export default function SortBy({ sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select className="custom-select" value={sort} onChange={handleChange}>
        <option disabled={true} value="">
          Sort by..
        </option>

        <option value="created_at">Date</option>

        <option value="comment_count">Comment count</option>

        <option value="votes">Votes</option>
      </select>
    </div>
  );
}
