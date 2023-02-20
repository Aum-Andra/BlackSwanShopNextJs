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
import heroAccs from "/img/accesories-hero.jpg";
import Image from "next/image";
import Card from "../../components/card";
import Link from "next/link";

const AllAccesories = () => {
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
  return (
    <div>
      <section id="accesories">
        <div className="herobox">
          <Image
            alt="image"
            className="hero-img"
            height='700px'
            src={heroAccs}
          ></Image>
          <div className="text">
            <p>Black Swan</p>
            <h1>EXQUISITE </h1>
            <h1>
              ACCESORIES <span className="white-card">SINCE 1975</span>
            </h1>
            <p>New Collection</p>
          </div>
        </div>
        <div id="showcase">
          <h1 className="heading">OUR ACCESORIES</h1>
          <div className="cards-container">
            {accesories.map((accesory) => (
              <Link href={"/accesories/" + accesory.id} key={accesory.id}>
                <a>
                  <Card data={accesory} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllAccesories;
