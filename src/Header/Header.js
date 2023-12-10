import React, {useContext}from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import ContextProvider from "../store/ContextProvider";

const Header = (props) => {
  const cartCtx=useContext(ContextProvider);
 const submitHandler=(e)=>{
  e.preventDefault();
  console.log(e.target.children[1].value);
  console.log(e.target.children[3].value);
  console.log(e.target.children[5].value);
  const item={
    id:Math.random().toString(),
    name:e.target.children[1].value,
    description:e.target.children[3].value,
    price:e.target.children[5].value
  }
  cartCtx.addItem(item);
 }
  return (
    <div className={classes.header}>
      <form onSubmit={submitHandler}>
        <label>Candy Name</label>
        <input type="text"></input>
        <label>Desciption</label>
        <input type="text"></input>
        <label>Price</label>
        <input type="number"></input>
        <button type="submit">Add</button>
      </form>
      <HeaderCartButton onClick={props.onClick} />
    </div>
  );
};

export default Header;
