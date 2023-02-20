import React, { useContext, useState } from "react";
import { CartContext } from "../util/CartContext";
import Image from "next/image";

function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);
  const { cart, cartTotal, updateItemQuantity, removeFromCart, removeAll } =
    useContext(CartContext);

  return (
    <div className="Cart-Container">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <h5 className="Action" onClick={() => removeAll()}>
          Remove all
        </h5>
      </div>

      <ul>
        {cart.map((product, index) => (
          <li className="Cart-Items" key={index}>
            <div style={{ display: "flex" }}>
              <div className="image-box">
                <Image alt="img" src={product?.image}></Image>
              </div>

              <div className="about" style={{ marginLeft: "20px" }}>
                <h1 className="title">{product.name} </h1>
                <h3 className="subtitle" style={{ marginLeft: "5px" }}>
                  {product.size}
                </h3>
              </div>
            </div>
            {/* <div className="counter">
              <div
                className="btn-count"
                onClick={() => {
                  setQuantity(quantity + 1);
                  updateItemQuantity(product, quantity);
                }}
              >
                +
              </div>
              <div className="count">{quantity}</div>
              <div
                className="btn-count"
                onClick={() => {
                  setQuantity(quantity - 1);
                  updateItemQuantity(product, quantity);
                }}
              >
                -
              </div>
            </div> */}
            <div className="prices">
              <div className="amount">{product.price}</div>

              <div onClick={() => removeFromCart(product)} className="remove">
                <u>Remove</u>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div className="checkout">
        <div>
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">{cart.length}</div>
            </div>
            <div className="total-amount">{cartTotal} $</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
