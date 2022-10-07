import React, { useState } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import Button from "../Button";
const Cart = (prop) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const [items, setItems] = useState(cartElements);

  let arr = [...items];
  let hasItem = false;
  const decreasingQuantity = (title) => {
    arr.forEach((data, index) => {
      if (data.title === title) {
        arr[index].quantity = Number(arr[index].quantity) - 1;
        hasItem = true;
      }

      if (arr[index].quantity === 0) {
        arr.splice(index, 1);
        hasItem = true;
      }
    });

    if (hasItem === true) {
      setItems(arr);
    }
  };

  const cartItems = (
    <ul className="cart-items">
      {items.map((item) => {
        return (
          <li key={item.title}>
            <img src={item.imageUrl} alt="ItemImage"></img>
            <span>
              Title : <div>{item.title}</div>
            </span>
            <span>
              QUANTITY : <div>{item.quantity}</div>
              <Button onClick={decreasingQuantity.bind(this, item.title)}>
                REMOVE ITEMS
              </Button>
            </span>
            <span>
              Price : <div>{item.price}</div>
            </span>
          </li>
        );
      })}
    </ul>
  );

  const closeCartHandler = () => {
    prop.closeCart();
  };

  return (
    <Modal>
      <Button className={"cancel-button"} onClick={closeCartHandler}>
        X
      </Button>
      <div>{cartItems}</div>
    </Modal>
  );
};

export default Cart;
