import React, { useState } from "react";

function Search({ filteredItems, items }) {
  const [searchItems, setSearchItems] = useState("")

  const handleSearchItems = (e) => {
    setSearchItems(e.target.value)
    
    const newFilterItem = items.filter((item) => {
      if (searchItems === item.description.toLowerCase().includes(item.description))
        return newFilterItem
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItems}
        onChange={handleSearchItems}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
