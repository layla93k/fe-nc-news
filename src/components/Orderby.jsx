import React from "react";

export default function Orderby({ order, setOrder }) {
  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div className="custom-select">
      <select value={order} onChange={handleChange}>
        <option disabled={true} value="">
          Order by...
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}
