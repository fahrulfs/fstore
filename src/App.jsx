import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/home/ProductDetail";
import Cart from "./components/Cart";
import { useState } from "react";
export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);




  // CART CALCULATION 
  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex >= 0) {
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, totalPrice: product.price }]);
    }
    setCartCount(cartCount + 1); // Perbarui cartCount
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