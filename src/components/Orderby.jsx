import React from "react";

export default function Orderby({ order, setOrder }) {
  const handleChange = (event) => {
    console.log(event.target.value);
    setOrder(event.target.value);
  };

  return (
    <div className="dropdown-orderby">
      <label>
        {" "}
        Order by..
        <div className="dropdown-content-orderby"></div>
        <select value={order} onChange={handleChange}>
          <option value="asc">Ascending</option>

          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}
