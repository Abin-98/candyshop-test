import React, { useContext, useState } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../store/cart-context";
const Header = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [L, setL] = useState("");
  const [M, setM] = useState("");
  const [S, setS] = useState("");
  const cartCtx=useContext(CartContext)

  const submitHandler = (e) => {
    e.preventDefault();
    cartCtx.addToList({
      id: Math.random().toString(),
      name: name,
      description: desc,
      price: price,
      L:L,
      M:M,
      S:S,
    })
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const lChangeHandler = (e) => {
    setL(e.target.value);
  };
  const mChangeHandler = (e) => {
    setM(e.target.value);
  };
  const sChangeHandler = (e) => {
    setS(e.target.value);
  };

  return (
    <div className={classes.header}>
      <form onSubmit={submitHandler}>
        <label>Shoe Name</label>
        <input type="text" value={name} onChange={nameChangeHandler}></input>
        <label>Desciption</label>
        <input type="text" value={desc} onChange={descChangeHandler}></input>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={priceChangeHandler}
        ></input>
        <label>L</label>
        <input
          type="number"
          value={L}
          onChange={lChangeHandler}
        ></input>
        <label>M</label>
        <input
          type="number"
          value={M}
          onChange={mChangeHandler}
        ></input>
        <label>S</label>
        <input
          type="number"
          value={S}
          onChange={sChangeHandler}
        ></input>
        <button type="submit">Add Product</button>
      </form>
      <HeaderCartButton onClick={props.onClick} />
    </div>
  );
};

export default Header;
