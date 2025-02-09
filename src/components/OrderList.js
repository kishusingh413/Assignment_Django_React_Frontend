import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderCard from "./OrderCard";

const OrderList = () => {
  const { orders } = useContext(OrderContext);

  return (
    <div className="order-list">
      <h2>Purchased Orders</h2>
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
