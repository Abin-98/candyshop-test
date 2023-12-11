import React,{useContext} from 'react'
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext)
  const showCart=()=>{
    props.onClick();
  }
  const total=cartCtx.items.reduce((val,item)=>{
    return val+Number(item.quantity);
  },0)
  return (
    <button className={classes.btn} onClick={showCart}>
      <span>Cart</span>
      <span>{total}</span>
    </button>
  )
}

export default HeaderCartButton
