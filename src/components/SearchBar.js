import React from "react";

function SearchBar({onFilter, onAlphaSort, onPriceSort}) {
  const handleAlphaSort = () => {
    onAlphaSort()
  }

  const handlePriceSort = () => {
    onPriceSort()
  }

  const handleFilter = (event) => {
    onFilter(event.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleAlphaSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handlePriceSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
