import { useRouter } from "next/router";
import d1 from "/img/dress1.jpg";
import d2 from "/img/dress2.jpg";
import d3 from "/img/dress3.jpg";
import d4 from "/img/dress4.jpg";
import d5 from "/img/dress5.jpg";
import d6 from "/img/dress6.jpg";
import d7 from "/img/dress7.jpg";
import d8 from "/img/dress8.jpg";
import d9 from "/img/dress9.png";
import d10 from "/img/dress10.jpg";
import d11 from "/img/dress11.jpg";
import d12 from "/img/dress12.jpg";
import d13 from "/img/dress13.jpg";
import d14 from "/img/dress14.jpg";
import d15 from "/img/dress15.jpg";
import d16 from "/img/dress16.jpg";
import d17 from "/img/dress17.png";
import d18 from "/img/dress18.jpg";
import d19 from "/img/dress19.jpg";
import d20 from "/img/dress20.jpg";
import d21 from "/img/dress21.png";
import d22 from "/img/dress22.jpg";
import d23 from "/img/dress23.jpg";
import d24 from "/img/dress24.jpg";
import d25 from "/img/dress25.jpg";
import d26 from "/img/dress26.jpg";
import d27 from "/img/dress27.jpg";
import d28 from "/img/dress28.jpg";
import d29 from "/img/dress29.jpg";
import d30 from "/img/dress30.jpg";
import d31 from "/img/dress31.jpg";
import d32 from "/img/dress32.jpg";
import d33 from "/img/dress33.jpg";
import d34 from "/img/dress34.jpg";
import d35 from "/img/dress35.jpg";
import d36 from "/img/dress36.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { useState, useContext } from "react";
import { CartContext } from "../../util/CartContext";
import ItemSwiper from "../../components/swiper";

const Details = () => {
  const { products, addToCart } = useContext(CartContext);
  const router = useRouter();
  const prodId = router.query.id;
  const dresses = [
    {
      name: "Woman Dress",
      image: d22,
      price: "1000$",
      id: 22,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d23,
      price: "1000$",
      id: 23,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d24,
      price: "1000$",
      id: 24,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d25,
      price: "1000$",
      id: 25,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d26,
      price: "1000$",
      id: 26,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d28,
      price: "1000$",
      id: 28,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d29,
      price: "1000$",
      id: 29,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d30,
      price: "1000$",
      id: 30,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d1,
      price: "1000$",
      id: 1,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d2,
      price: "1000$",
      id: 2,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d3,
      price: "1000$",
      id: 3,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d4,
      price: "1000$",
      id: 4,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d5,
      price: "1000$",
      id: 5,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d6,
      price: "1000$",
      id: 6,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d7,
      price: "1000$",
      id: 7,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d8,
      price: "1000$",
      id: 8,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d9,
      price: "1000$",
      id: 9,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d10,
      price: "1000$",
      id: 10,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d11,
      price: "1000$",
      id: 11,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d12,
      price: "1000$",
      id: 12,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d13,
      price: "1000$",
      id: 13,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d14,
      price: "1000$",
      id: 14,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d15,
      price: "1000$",
      id: 15,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d16,
      price: "1000$",
      id: 16,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d17,
      price: "1000$",
      id: 17,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d18,
      price: "1000$",
      id: 18,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d19,
      price: "1000$",
      id: 19,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d20,
      price: "1000$",
      id: 20,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d21,
      price: "1000$",
      id: 21,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d31,
      price: "1000$",
      id: 31,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d32,
      price: "1000$",
      id: 32,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d33,
      price: "1000$",
      id: 33,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d34,
      price: "1000$",
      id: 34,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d35,
      price: "1000$",
      id: 35,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d36,
      price: "1000$",
      id: 36,
      category: "women-dresses",
    },
    {
      name: "Woman Dress",
      image: d27,
      price: "1000$",
      id: 27,
      category: "women-dresses",
    },
  ];

  const [size, setSize] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const addProductToCart = () => {
    if (size) {
      thisProduct.size = size;
      addToCart(thisProduct);
      router.push("/shopping-cart");
    } else {
      setErrorMsg(true);
    }
  };

  const thisProduct = dresses.find((dress) => dress.id == prodId);

  console.log(thisProduct);
  return (
    <section id="product-details">
      <div className="product-details">
        {thisProduct?.image && (
          <div className="prod-img">
            <Image
              alt="image"
              src={thisProduct?.image}
              width="500px"
              height="600px"
            ></Image>
          </div>
        )}
        <div className="prod-description">
          <h2 className="prod-name">{thisProduct?.name}</h2>
          <p className="prod-price">Price : {thisProduct?.price}</p>
          <div className="ratings">
            <FontAwesomeIcon icon={faPen} />
            <p>See reviews (32)</p>
          </div>
          <div className="size">
            <h4 className="size-sel">Select size</h4>
            <div className="size-list">
              <p
                onClick={() => setSize("XS")}
                className={size == "XS" ? "selected" : ""}
              >
                XS
              </p>
              <p
                onClick={() => setSize("S")}
                className={size == "S" ? "selected" : ""}
              >
                S
              </p>
              <p
                onClick={() => setSize("M")}
                className={size == "M" ? "selected" : ""}
              >
                M
              </p>
              <p
                onClick={() => setSize("L")}
                className={size == "L" ? "selected" : ""}
              >
                L
              </p>
              <p
                onClick={() => setSize("XL")}
                className={size == "XL" ? "selected" : ""}
              >
                XL
              </p>
            </div>
            {errorMsg && (
              <div>
                <p>Please choose a size!</p>
              </div>
            )}
          </div>
          <button className="btn" onClick={() => addProductToCart()}>
            Add to cart
          </button>
          <div className="prod-boxes">
            <div className="prod-box">
              <div className="box-title">
                <p className="img">
                  <FontAwesomeIcon icon={faTruckFast} />
                </p>
                <h4>Free Shipping</h4>
              </div>

              <div className="box-text">
                <p>Free standard shipping on orders over 39,00$</p>
                <p>Estimated to be delivered on 17/06/2022 - 20/05/2022</p>
              </div>
            </div>
            <div className="prod-box">
              <div className="box-title">
                <p className="img">
                  <FontAwesomeIcon icon={faUserShield} />
                </p>
                <h4>Return Policy</h4>
              </div>
              <div className="box-text">
                <p>Return and exchanged goods are supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prod-description-material">
        <h2>Description</h2>
        <div className="colls">
          <div className="col-1">
            <p>Color:</p>
            <p>Style:</p>
            <p>Pattern Type:</p>
            <p>Type:</p>
            <p>Neckline:</p>
            <p>Length:</p>
            <p>Fabric:</p>
            <p>Material:</p>
          </div>
          <div className="coll-2">
            <p>Black</p>
            <p>Elegant</p>
            <p>None</p>

            <p>Bodycon</p>
            <p>Off the Shoulder</p>
            <p>Long</p>
            <p>Non-Stretch</p>
            <p>Satin,Polyester </p>
          </div>
        </div>
      </div>
      <h2 className="more-swiper-items-header">More to love</h2>
      <ItemSwiper items={dresses} />
    </section>
  );
};

export default Details;
