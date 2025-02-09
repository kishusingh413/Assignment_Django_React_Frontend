import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import { useLocation, useNavigate } from "react-router-dom";

const OrderDetailsPage = () => {
  const { orders, setOrders } = useContext(OrderContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const cartItems = location.state?.cartItems || [];
  const [orderAdded, setOrderAdded] = useState(false); // ✅ Prevents multiple additions

  useEffect(() => {
    if (!orders || cartItems.length === 0) {
      alert("Cart is empty! Redirecting to homepage.");
      navigate("/");
      return;
    }

    if (!orderAdded) { // ✅ Ensures order is added only once
      const newOrder = {
        id: `ORD${orders.length + 1}`,
        date: new Date().toISOString().split("T")[0],
        total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        status: "Processing",
        items: cartItems.map(({ name, quantity }) => ({ name, quantity }))
      };

      setOrders([...orders, newOrder]);
      setOrderAdded(true); // ✅ Prevents duplicate entries

      setTimeout(() => {
        navigate("/");
        window.location.reload(); // ✅ Force page refresh
      }, 1000);
    }
  }, [cartItems, navigate, orders, setOrders, orderAdded]); // ✅ Depend on `orderAdded` to prevent infinite loop

  return (
    <div className="order-details-page">
      <h2>Order Placed Successfully!</h2>
      <p>Redirecting to homepage...</p>
    </div>
  );
};

export default OrderDetailsPage;
