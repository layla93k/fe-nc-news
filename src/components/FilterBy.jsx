import React from "react";

export default function FilterBy({ setTopicName, topicName }) {
  const handleTopicChange = (event) => {
    setTopicName(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select className="custom-select" onChange={handleTopicChange}>
        <option disabled={true} value={topicName}>
          Topics
        </option>
        <option value="football">Football</option>
        <option value="coding">Coding</option>
        <option value="cooking"> Cooking </option>
      </select>
    </div>
  );
}
