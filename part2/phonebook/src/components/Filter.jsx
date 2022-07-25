import React from "react";

const Filter = ({ filtered, handleFilterE }) => {
  return (
    <div>
      filter shown with <input value={filtered} onChange={handleFilterE} />
    </div>
  );
};

export default Filter;
