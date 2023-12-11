import "./App.css";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import List from "./List/List";
import { useState } from "react";
import ContextProvider from "./store/ContextProvider";
function App() {
  const [showCart, setShowCart] = useState(false);
  const cartShowHandler = () => {
    setShowCart(true);
  };

  const cartHideHandler = () => {
    setShowCart(false);
  };
  return (
    <ContextProvider>
      {showCart && <Cart onClick={cartHideHandler} />}
      <Header onClick={cartShowHandler} />
      <main><List /></main>
    </ContextProvider>
  );
}

export default App;
