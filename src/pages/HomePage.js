import React from "react";
import OrderList from "../components/OrderList";
import SupportButton from "../components/SupportButton";
import { OrderProvider } from "../context/OrderContext";

const HomePage = () => {
  return (
    <OrderProvider>
      <div className="home-page">
        <h1>Order Management System</h1>
        <OrderList />
        <button onClick={() => window.location.href = "/new-order"}>New Order</button>
        <SupportButton /> {/* ✅ Add the support chat button */}
      </div>
    </OrderProvider>
  );
};

export default HomePage;
