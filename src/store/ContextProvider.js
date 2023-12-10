import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
});

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    const index=items.findIndex((a)=>a.id===item.id)
    if(index===-1){
      setItems(item)
    }
    else{
      const dup=[...items]
      dup[index].quantity+=Number(item.quantity);
      setItems([...dup]);
    }
  };


  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
