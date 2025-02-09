import React, { useState } from "react";
// import "./OrderCard.css"; // Style this separately

const OrderCard = ({ order }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="order-card">
      <div className="order-header" onClick={() => setExpanded(!expanded)}>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Total:</strong> ${order.total}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>
      {expanded && (
        <div className="order-details">
          <h4>Items:</h4>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>{item.name} - {item.quantity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
