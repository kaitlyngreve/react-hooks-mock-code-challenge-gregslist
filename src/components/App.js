import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  // going to have to set up some state 
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState({})
  const [deletedItem, setDeletedItem] = useState({})

  // going to have to set up a useEffect to fetch my data
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(item => setItems(item))
  }, [] ) 

  useEffect(() => {
    fetch(`http://localhost:6001/listings/id`, 
        { method: 'DELETE' })
        .then(() => setDeletedItem(deletedItem.id));

}, []);

  const handleFilteredItems = () => {
    setFilteredItems(filteredItems)
  }


  // i will have to send that data down to my listing card - going through the listings container first 
  return (
    <div className="app">
      <Header filteredItems={filteredItems} items={items} handleFilteredItems={handleFilteredItems} />
      <ListingsContainer filteredItems={filteredItems} items={items} deletedItem={deletedItem} />
    </div>
  );
}

export default App;
