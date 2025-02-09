import React, { useState } from "react";
import Cart from "../components/Cart";
import ItemList from "../components/ItemList";
import "../styles/NewOrderPage.css"; // Styling
import itemsData from "../data/items.json";

const NewOrderPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (e, item) => {
    e.preventDefault();

    setCartItems((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="new-order-page">
      {/* Left Panel - Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} × ${item.price} = <strong>${item.quantity * item.price}</strong>
              </li>
            ))}
          </ul>
        )}
        <hr />
        <h4>Total Price: <strong>${totalPrice.toFixed(2)}</strong></h4>
      </div>

      {/* Center Panel - Cart */}
      <div className="cart-section">
        <Cart cartItems={cartItems} removeItem={removeItem} />
      </div>

      {/* Right Panel - Product List */}
      <div className="product-list">
        <ItemList items={itemsData} addItem={addItem} />
      </div>
    </div>
  );
};

export default NewOrderPage;
