import React from "react";

const CartContext = React.createContext({
    items: [],
    list:[],
    totalAmount: 0,
    addToList:(item)=>{},
    addItem: (item) => {},
  });

export default CartContext;