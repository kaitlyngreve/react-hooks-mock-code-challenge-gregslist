import React from "react";
import Search from "./Search";

function Header({ filteredItems, handleFilteredItems, items }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filteredItems={filteredItems} items={items} handleFilteredItems={handleFilteredItems} />
    </header>
  );
}

export default Header;
