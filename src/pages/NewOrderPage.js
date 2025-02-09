// import React, { useState } from "react";
// import ItemList from "../components/ItemList";
// import Cart from "../components/Cart";
// import itemsData from "../data/items.json";

// const NewOrderPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addItem = (e, item) => {
//     e.preventDefault();
//     setCartItems([...cartItems, item]);
//   };

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   return (
//     <div className="new-order-container">
//       <Cart cartItems={cartItems} removeItem={removeItem} />
//       <ItemList items={itemsData} addItem={addItem} />
//     </div>
//   );
// };

// export default NewOrderPage;

import React, { useState } from "react";
import Cart from "../components/Cart";
import ItemList from "../components/ItemList";
import itemsData from "../data/items.json";

const NewOrderPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (e, item) => {
    e.preventDefault();
    
    setCartItems((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increase quantity
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }]; // Add new item with quantity 1
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  };

  const placeOrder = () => {
    console.log("Order Placed:", cartItems);
    setCartItems([]); // Clear cart after placing order
  };

  return (
    <div className="new-order-container">
      <Cart cartItems={cartItems} removeItem={removeItem} placeOrder={placeOrder} />
      <ItemList items={itemsData} addItem={addItem} />
    </div>
  );
};

export default NewOrderPage;
