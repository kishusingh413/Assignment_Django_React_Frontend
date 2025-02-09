import React from "react";
import OrderList from "../components/OrderList";
import { OrderProvider } from "../context/OrderContext";

const HomePage = () => {
  return (
     <OrderProvider>
      <div className="home-page">
        <OrderList />
        <button onClick={() => window.location.href = "/new-order"}>
          New Order
        </button>
      </div>
     </OrderProvider>
  );
};

export default HomePage;
