import { useRouter } from "next/router";
import a1 from "/img/accesory1.jpg";
import a2 from "/img/accesory2.jpg";
import a3 from "/img/accesoryes3.jpg";
import a4 from "/img/accesories4.jpg";
import a5 from "/img/accesories5.jpg";
import a6 from "/img/accesories6.jpg";
import a7 from "/img/accesories7.jpg";
import a8 from "/img/accesories8.jpg";
import a9 from "/img/accesories9.jpg";
import a10 from "/img/accesories10.jpg";
import a11 from "/img/accesories11.jpg";
import a12 from "/img/accesories12.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  const router = useRouter();
  const prodId = router.query.id;
  const accesories = [
    { name: "Accesory", image: a1, price: "1000$", id: 1 },
    { name: "Accesory", image: a2, price: "1000$", id: 2 },
    { name: "Accesory", image: a3, price: "1000$", id: 3 },
    { name: "Accesory", image: a4, price: "1000$", id: 4 },
    { name: "Accesory", image: a5, price: "1000$", id: 5 },
    { name: "Accesory", image: a6, price: "1000$", id: 6 },
    { name: "Accesory", image: a7, price: "1000$", id: 7 },
    { name: "Accesory", image: a8, price: "1000$", id: 8 },
    { name: "Accesory", image: a9, price: "1000$", id: 9 },
    { name: "Accesory", image: a10, price: "1000$", id: 10 },
    { name: "Accesory", image: a11, price: "1000$", id: 11 },
    { name: "Accesory", image: a12, price: "1000$", id: 12 },
  ];

  const thisProduct = accesories.find((accesory) => accesory.id == prodId);
  return (
    <section id="product-details">
      <div className="product-details">
        <div className="prod-img">
          <Image  alt="image" src={thisProduct.image} width="600px" height="600px"></Image>
        </div>
        <div className="prod-description">
          <h2 className="prod-name">{thisProduct.name}</h2>
          <p className="prod-price">Price : {thisProduct.price}</p>
          <div className="ratings">
            <FontAwesomeIcon icon={faPen} />
            <p>See reviews (32)</p>
          </div>

          <button className="btn">Add to cart</button>
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
    </section>
  );
};

export default Details;
