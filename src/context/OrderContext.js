import React, { createContext, useState, useEffect } from "react";
import ordersData from "../data/orders.json";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || ordersData;
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders)); // ✅ Save orders persistently
  }, [orders]);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
