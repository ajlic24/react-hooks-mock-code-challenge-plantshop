import React from "react";

function Search({onSearch, search}) {

  function handleOnChange(e) {
    onSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleOnChange}
        value={search}
      />
    </div>
  );
}

export default Search;
