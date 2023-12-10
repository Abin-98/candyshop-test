import React ,{useContext} from 'react'
import ContextProvider from '../store/ContextProvider'
import ListItem from './ListItem';

const List = () => {
  const cartCtx=useContext(ContextProvider);

  return (
    <div>
      {/* {cartCtx.map((item)=>{
        return(<ListItem name={item.name} description={item.description} price={item.price}/>)
      })} */}
    </div>
  )
}

export default List
