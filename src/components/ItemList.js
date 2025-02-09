import React from "react";

const ItemList = ({ items, addItem }) => {
  return (
    <div className="item-list">
      <h3>Available Items</h3>
      {items.map(item => (
        <div key={item.id} draggable onDragStart={(e) => addItem(e, item)}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
