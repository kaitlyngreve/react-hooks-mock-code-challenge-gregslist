import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ items, filteredItems, deletedItem }) {
  return (
    <main>
      <ul className="cards">
        {items.map((item) => {
          return <ListingCard item={item} filteredItems={filteredItems} deletedItem={deletedItem} />
          })
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
