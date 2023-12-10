import React,{useContext} from 'react'
import ContextProvider from '../store/ContextProvider'

const ListItem = (props) => {
    const cartCtx=useContext(ContextProvider)
    const buyOneHandler=()=>{
        cartCtx.addItem()
    }
    const buyTwoHandler=()=>{
        
    }
    const buyThreeHandler=()=>{
        
    }
  return (
    <div>
      {props.name}
      {props.description}
      {props.price}
      <button onClick={buyOneHandler}>Buy One</button>
      <button onClick={buyTwoHandler}>Buy Two</button>
      <button onClick={buyThreeHandler}>Buy Three</button>
    </div>
  )
}

export default ListItem
