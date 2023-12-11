import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const ListItem = (props) => {
  const cartCtx = useContext(CartContext);
  const item = {
    id: props.id,
    name: props.name,
    description: props.description,
    price: props.price,
    L: props.L,
    M: props.M,
    S: props.S,
  };
  const buyLargeHandler = () => {
    const dup = cartCtx.list.findIndex((e) => {
      return e.id === item.id;
    });
    
    if (cartCtx.list[dup].L > 0) {
      cartCtx.list[dup].L -= Number(1);
      cartCtx.addItem({ ...item, M: 0, S: 0, L: 1 });
    }
  };
  const buyMedHandler = () => {
    const dup = cartCtx.list.findIndex((e) => {
      return e.id === item.id;
    });

    if (cartCtx.list[dup].M > 0) {
      cartCtx.list[dup].M -= Number(1);
      cartCtx.addItem({ ...item, M: 1, S: 0, L: 0 });
    }
  };
  const buySmallHandler = () => {
    const dup = cartCtx.list.findIndex((e) => {
      return e.id === item.id;
    });

    if (cartCtx.list[dup].S > 0) {
      cartCtx.list[dup].S -= Number(1);
      cartCtx.addItem({ ...item, M: 0, S: 1, L: 0 });
    }
  };
  return (
    <div>
      {props.name}
      {props.description}
      {props.price}
      <button onClick={buyLargeHandler}>Buy Large ({props.L})</button>
      <button onClick={buyMedHandler}>Buy Medium ({props.M})</button>
      <button onClick={buySmallHandler}>Buy Small ({props.S})</button>
    </div>
  );
};

export default ListItem;
