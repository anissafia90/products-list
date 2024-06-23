import React from "react";

const Items = (props) => {
  const { items, del, updateItems } = props;
  let length = items.length;
  const increaseQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateItems(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateItems(updatedItems);
  };

  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
