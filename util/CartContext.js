import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const newCartTotal = parseInt(cartTotal) + parseInt(product?.price);
    setCartTotal(newCartTotal);
  };

  const removeFromCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    const newCartItems = [...cart];
    newCartItems.splice(itemIndex, 1);
    setCart(newCartItems);
    const newCartTotal = parseInt(cartTotal) - parseInt(item?.price);
    setCartTotal(newCartTotal);
  };

  const removeAll = () => {
    setCart([]);
    setCartTotal(0);
  };

  const updateItemQuantity = (item, quantity) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    const newCartItems = [...cart];
    newCartItems[itemIndex].quantity = quantity;
    setCart(newCartItems);
    const newCartTotal = cart.reduce(
      (total, cartItem) => parseInt(total) + parseInt(cartItem.price) * parseInt(cartItem.quantity),
      0
    );
    setCartTotal(newCartTotal);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        updateItemQuantity,
        removeFromCart,
        removeAll,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
