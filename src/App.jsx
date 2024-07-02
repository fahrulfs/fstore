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
    setCartCount(cartCount + 1);
  };

  // cart show - hide
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };
  const [cartCount, setCartCount] = useState(0);

  // close cart component by clicking x icon
  const hideCart = () => {
    setIsCartVisible(false);
  }

  return (
    <>
      <Navbar toggleCartVisibility={toggleCartVisibility} cartCount={cartCount} setCartCount={setCartCount} />
      <Outlet />
      <ProductDetail addToCart={addToCart} />
      {isCartVisible && <Cart cartItems={cartItems} hideCart={hideCart} />}
    </>
  )
}