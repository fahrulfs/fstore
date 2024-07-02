import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/home/ProductDetail";
import Cart from "./components/Cart";
import { useState } from "react";
export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // cart show - hide
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible); a
  };


  return (
    <>
      <Navbar toggleCartVisibility={toggleCartVisibility} />
      <Outlet />
      <ProductDetail addToCart={addToCart} />
      {isCartVisible && <Cart cartItems={cartItems} />}
    </>
  )
}