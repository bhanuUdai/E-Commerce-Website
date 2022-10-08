import React, { useState } from "react";
import CartContext from "./cart-context";
const ContextProvider = (prop) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCartHAndler = (item) => {
    console.log(item);

    let hasItem = false;
    let cartArr = [...cartItem];

    cartArr.forEach((data, index) => {
      if (data.title === item.title) {
        cartArr[index].quantity = Number(cartArr[index].quantity) + 1;
        hasItem = true;
      }
    });

    if (hasItem === true) {
      setCartItem(cartArr);
    } else {
      setCartItem([...cartItem, item]);
    }
  };
  console.log(cartItem);

  const removeCartHandler=(id)=>
  {
    let arr=[...cartItem]

    arr.forEach((data,index)=>
    {
        if(data.title===id)
        {
            arr[index].quantity=Number(arr[index].quantity)-1;
        }

        if(arr[index].quantity===0)
        {
            arr.splice(index,1)
        }

        setCartItem(arr)
    })

  }

  const amount=cartItem.reduce((netamt,amt)=>
  {
    return netamt+amt.price*amt.quantity
  },0)


  return (
    <CartContext.Provider
      value={{
        items: cartItem,
        totalAmount:amount,
        addToCart: addToCartHAndler,
        removeItem: removeCartHandler,
      }}
    >
      {prop.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
