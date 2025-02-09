import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeItem }) => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add items before placing an order.");
      return;
    }
    navigate("/order-details", { state: { cartItems } });
  };

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            {item.name} x {item.quantity}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
