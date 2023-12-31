import React, { useState } from "react";

import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
 const [inputItem, setInputItem]=useState([]);

  const addItemHandler = (item) => {
    const index=items.findIndex((a)=>a.id===item.id)
    if(index===-1){
      setItems([...items,item])
    }
    else{
      const dup=[...items]
      dup[index].L+=Number(item.L);
      dup[index].M+=Number(item.M);
      dup[index].S+=Number(item.S);
      setItems([...dup]);
    }
  };
  const addToListFn=(item)=>{
    setInputItem((prev)=>[...prev,item]);
  }
  const clearItemsHandler=()=>{
    setItems([])
  }
  const cartContext = {
    items: items,
    list:inputItem,
    totalAmount: 0,
    addToList:addToListFn,
    addItem: addItemHandler,
    clearItems:clearItemsHandler
  };


  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
