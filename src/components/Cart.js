import React from "react";

const Cart = ({ cartItems, removeItem }) => {
  return (
    <div className="cart">
      <h3>Cart</h3>
      {cartItems.map((item, index) => (
        <div key={index} onDrop={() => removeItem(item.id)}>
          {item.name} x {item.quantity}
        </div>
      ))}
      <button>Place Order</button>
    </div>
  );
};

export default Cart;
