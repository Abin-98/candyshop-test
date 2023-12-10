import React from 'react'

const HeaderCartButton = (props) => {
  
  const showCart=()=>{
    props.onClick();
  }

  return (
    <button onClick={showCart}>
      <span>Cart</span>
      <span>0</span>
    </button>
  )
}

export default HeaderCartButton
