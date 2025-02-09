import React, { useState } from "react";
import ItemList from "../components/ItemList";
import Cart from "../components/Cart";
import itemsData from "../data/items.json";

const NewOrderPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (e, item) => {
    e.preventDefault();
    setCartItems([...cartItems, item]);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="new-order-container">
      <Cart cartItems={cartItems} removeItem={removeItem} />
      <ItemList items={itemsData} addItem={addItem} />
    </div>
  );
};

export default NewOrderPage;
