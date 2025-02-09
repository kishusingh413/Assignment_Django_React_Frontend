import React, { useContext, useEffect } from "react";
import { OrderContext } from "../context/OrderContext";
import { useLocation, useNavigate } from "react-router-dom";

const OrderDetailsPage = () => {
  const { orders, setOrders } = useContext(OrderContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const cartItems = location.state?.cartItems || [];

  useEffect(() => {
    if (cartItems.length === 0) {
      alert("Cart is empty! Redirecting to homepage.");
      navigate("/"); // Redirect if cart is empty
      return;
    }

    const newOrder = {
      id: `ORD${orders.length + 1}`, // Unique Order ID
      date: new Date().toISOString().split("T")[0], // Current Date (YYYY-MM-DD)
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: "Processing",
      items: cartItems.map(({ name, quantity }) => ({ name, quantity }))
    };

    setOrders([...orders, newOrder]); // Add new order to the order list

    setTimeout(() => {
      navigate("/"); // Redirect to homepage after order is placed
    }, 2000);
  }, [cartItems, navigate, orders, setOrders]);

  return (
    <div className="order-details-page">
      <h2>Order Placed Successfully!</h2>
      <p>Redirecting to homepage...</p>
    </div>
  );
};

export default OrderDetailsPage;
