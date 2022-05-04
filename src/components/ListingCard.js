import React, { useState } from "react";

function ListingCard({ item, filteredItems, deletedItem }) {
  const [favorite, setFavorite] = useState(false)

  const handleFavButton = () => {
    setFavorite(!favorite)
  }

  const handleDelete = () => {
    return deletedItem
  }
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div className="details">
          <button onClick={handleFavButton} className="emoji-button favorite active">
            {favorite ? "★" : "☆"}
          </button>
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
