import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  cartCtx.totalAmount = cartCtx.items.reduce((val, item) => {
    return val + Number((item.L+item.M+item.S) * item.price);
  }, 0);
  return (
    <Modal onClick={props.onClick}>
      <ul className={classes.cartItems}>
        {cartCtx.items.map((item) => {
          return (
            <li className={classes.list}>
              <span>{item.name} ${item.price}</span>
              <span>{item.L > 0 ? `${item.L}-L ` : ""}
              {item.M > 0 ? `${item.M}-M ` : ""}
              {item.S > 0 ? `${item.S}-S ` : ""}</span>
            </li>
          );
        })}
      </ul>
      <li className={classes.foot}>
        <div>Total Amount: ${cartCtx.totalAmount}</div>
        
        <div>
        <button onClick={()=>{cartCtx.clearItems()}}>Place Order</button>
        <button onClick={props.onClick}>Cancel</button>
        </div>
      </li>
    </Modal>
  );
};

export default Cart;
