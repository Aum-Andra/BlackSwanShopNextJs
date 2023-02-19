// import React, { useState } from 'react';

// function ShoppingCart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartTotal, setCartTotal] = useState(0);

//   const addItemToCart = (item) => {
//     const newCartItems = [...cartItems, item];
//     setCartItems(newCartItems);
//     const newCartTotal = cartTotal + item.price;
//     setCartTotal(newCartTotal);
//   };

//   const removeItemFromCart = (item) => {
//     const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
//     const newCartItems = [...cartItems];
//     newCartItems.splice(itemIndex, 1);
//     setCartItems(newCartItems);
//     const newCartTotal = cartTotal - item.price;
//     setCartTotal(newCartTotal);
//   };

//   const updateItemQuantity = (item, quantity) => {
//     const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
//     const newCartItems = [...cartItems];
//     newCartItems[itemIndex].quantity = quantity;
//     setCartItems(newCartItems);
//     const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
//     setCartTotal(newCartTotal);
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.price} - {item.quantity}{' '}
//             <button onClick={() => removeItemFromCart(item)}>Remove</button>
//             <input
//               type="number"
//               min="1"
//               value={item.quantity}
//               onChange={(e) => updateItemQuantity(item, e.target.value)}
//             />
//           </li>
//         ))}
//       </ul>
//       <p>Total: {cartTotal}</p>
//     </div>
//   );
// }

// export default ShoppingCart;

import React, { useContext } from "react";
import { CartContext } from "../util/CartContext"; 

function ShoppingCart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
