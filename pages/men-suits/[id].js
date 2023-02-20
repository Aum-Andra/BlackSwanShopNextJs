import { useRouter } from "next/router";
import s1 from "/img/suit1.jpg";
import s2 from "/img/suit2.jpg";
import s3 from "/img/suit3.jpg";
import s4 from "/img/suit4.jpg";
import s5 from "/img/suit5.jpg";
import s6 from "/img/suit6.jpg";
import s7 from "/img/suit7.png";
import s8 from "/img/suit8.jpg";
import s9 from "/img/suit9.jpg";
import s10 from "/img/suit10.jpg";
import s11 from "/img/suit11.jpg";
import s12 from "/img/suit12.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../util/CartContext";
import ItemSwiper from "../../components/swiper";

const Details = () => {
  const router = useRouter();
  const prodId = router.query.id;
  const suits = [
    {
      name: "Man Suit",
      image: s1,
      price: "1000$",
      id: 1,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s2,
      price: "1000$",
      id: 2,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s3,
      price: "1000$",
      id: 3,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s4,
      price: "1000$",
      id: 4,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s5,
      price: "1000$",
      id: 5,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s6,
      price: "1000$",
      id: 6,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s7,
      price: "1000$",
      id: 7,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s8,
      price: "1000$",
      id: 8,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s9,
      price: "1000$",
      id: 9,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s10,
      price: "1000$",
      id: 10,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s11,
      price: "1000$",
      id: 11,
      category: "men-suits",
    },
    {
      name: "Man Suit",
      image: s12,
      price: "1000$",
      id: 12,
      category: "men-suits",
    },
  ];

  const { products, addToCart } = useContext(CartContext);

  const [size, setSize] = useState("");

  const addProductToCart = () => {
    if (size) {
      thisProduct.size = size;
      addToCart(thisProduct);
      router.push("/shopping-cart");
    } else {
      console.log("pls choose size");
    }
  };

  const thisProduct = suits.find((suit) => suit.id == prodId);
  return (
    <section id="product-details">
      {/* <button onClick={() => console.log(thisProduct)}></button> */}
      <div className="product-details">
        {thisProduct?.image && (
          <div className="prod-img">
            <Image
              alt="image"
              src={thisProduct.image}
              width="600px"
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
      <ItemSwiper items={suits} />
    </section>
  );
};

export default Details;
