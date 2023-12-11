import { useContext } from "react";
import CartContext from "../store/cart-context";
import ListItem from "./ListItem";

const List = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      {cartCtx.list.map((item) => {
        return (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            L={item.L}
            M={item.M}
            S={item.S}
          />
        );
      })}
    </div>
  );
};

export default List;
