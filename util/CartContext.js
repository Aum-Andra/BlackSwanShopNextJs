import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
