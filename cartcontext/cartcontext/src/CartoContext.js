import React, { createContext, useState, useContext } from 'react';

const CartoContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //const [click,setClick]=useState(false)

  const addItemToCart = (item) => {
    setCart([...cart, item])
    item.quantity++;
    console.log(item)
    console.log(cart)
    //setClick(true)
  };

  const removeItemFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    console.log()
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartoContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, updateItemQuantity }}
    >
      {children}
    </CartoContext.Provider>
  );
};

export const useCart = () => useContext(CartoContext);