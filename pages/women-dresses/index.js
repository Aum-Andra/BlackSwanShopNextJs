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
import heroDress from "/img/hbm.jpg";
import Image from "next/image";
import Card from "../../components/card";
import Link from "next/link";
import { useState} from "react";



const Dresses = () => {


  const dresses = [
    { name: "Woman Dress", image: d22, price: "1000$", id: 22, page: 1 },
    { name: "Woman Dress", image: d23, price: "1000$", id: 23, page: 1 },
    { name: "Woman Dress", image: d24, price: "1000$", id: 24, page: 1 },
    { name: "Woman Dress", image: d25, price: "1000$", id: 25, page: 1 },
    { name: "Woman Dress", image: d26, price: "1000$", id: 26, page: 1 },

    { name: "Woman Dress", image: d28, price: "1000$", id: 28, page: 1 },
    { name: "Woman Dress", image: d29, price: "1000$", id: 29, page: 1 },
    { name: "Woman Dress", image: d30, price: "1000$", id: 30, page: 1 },
    { name: "Woman Dress", image: d1, price: "1000$", id: 1, page: 1 },
    { name: "Woman Dress", image: d2, price: "1000$", id: 2, page: 2 },
    { name: "Woman Dress", image: d3, price: "1000$", id: 3, page: 2 },
    { name: "Woman Dress", image: d4, price: "1000$", id: 4, page: 2 },
    { name: "Woman Dress", image: d5, price: "1000$", id: 5, page: 2 },
    { name: "Woman Dress", image: d6, price: "1000$", id: 6, page: 2 },
    { name: "Woman Dress", image: d7, price: "1000$", id: 7, page: 2 },
    { name: "Woman Dress", image: d8, price: "1000$", id: 8, page: 2 },
    { name: "Woman Dress", image: d9, price: "1000$", id: 9, page: 2 },
    { name: "Woman Dress", image: d10, price: "1000$", id: 10, page: 2 },
    { name: "Woman Dress", image: d11, price: "1000$", id: 11, page: 3 },
    { name: "Woman Dress", image: d12, price: "1000$", id: 12, page: 3 },
    { name: "Woman Dress", image: d13, price: "1000$", id: 13, page: 3 },
    { name: "Woman Dress", image: d14, price: "1000$", id: 14, page: 3 },
    { name: "Woman Dress", image: d15, price: "1000$", id: 15, page: 3 },
    { name: "Woman Dress", image: d16, price: "1000$", id: 16, page: 3 },
    { name: "Woman Dress", image: d17, price: "1000$", id: 17, page: 3 },
    { name: "Woman Dress", image: d18, price: "1000$", id: 18, page: 3 },
    { name: "Woman Dress", image: d19, price: "1000$", id: 19, page: 3 },
    { name: "Woman Dress", image: d20, price: "1000$", id: 20, page: 4 },
    { name: "Woman Dress", image: d21, price: "1000$", id: 21, page: 4 },
    { name: "Woman Dress", image: d31, price: "1000$", id: 31, page: 4 },
    { name: "Woman Dress", image: d32, price: "1000$", id: 32, page: 4 },
    { name: "Woman Dress", image: d33, price: "1000$", id: 33, page: 4 },
    { name: "Woman Dress", image: d34, price: "1000$", id: 34, page: 4 },
    { name: "Woman Dress", image: d35, price: "1000$", id: 35, page: 4 },
    { name: "Woman Dress", image: d36, price: "1000$", id: 36, page: 4 },
    { name: "Woman Dress", image: d27, price: "1000$", id: 27, page: 4 },
  ];
  const [page, setPage] = useState(1);
  return (
    <section id="dresses">
      <div className="herobox">
        <Image alt="image" className="hero-img" src={heroDress}></Image>
        <div className="text">
          <p>Black Swan</p>
          <h1>EXQUISITE </h1>
          <h1>
            DRESSES <span className="white-card">SINCE 1975</span>
          </h1>
          <p>New Collection</p>
        </div>
      </div>
      <div id="showcase">
        <h1 className="heading">OUR DRESSES</h1>
        <div className="cards-container">
          {dresses.map((dress) => (
            <Link href={"/women-dresses/" + dress.id} key={dress.id}>
              <a>
                <Card data={dress} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="buttons">
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
      </div> */}
    </section>
  );
};

export default Dresses;
