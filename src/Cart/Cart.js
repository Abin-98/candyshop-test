import React ,{useContext} from 'react'
import Modal from '../Modal/Modal'
import CartContext from '../store/cart-context'
import classes from './Cart.module.css'
const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  cartCtx.totalAmount=cartCtx.items.reduce((val,item)=>{
    return val+Number(item.quantity*item.price);
  },0)
  return (
    <Modal onClick={props.onClick}>
      <ul className={classes.cartItems}>{cartCtx.items.map((item)=>{
        return(<li>
          {item.name}, {item.description}, {item.price}, L: {item.L}, M: {item.M}, S: {item.S}
        </li>)
      })}</ul>
      <span>Total Amount: {cartCtx.totalAmount}</span>
    </Modal>
  )
}

export default Cart
