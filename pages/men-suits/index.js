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
import heroSuit from "/img/heroSuit.jpg";
import Image from "next/image";
import Card from "../../components/card";
import Link from "next/link";

const Suits = () => {
  const suits = [
    { name: "Man Suit", image: s1, price: "1000$", id: 1 },
    { name: "Man Suit", image: s2, price: "1000$", id: 2 },
    { name: "Man Suit", image: s3, price: "1000$", id: 3 },
    { name: "Man Suit", image: s4, price: "1000$", id: 4 },
    { name: "Man Suit", image: s5, price: "1000$", id: 5 },
    { name: "Man Suit", image: s6, price: "1000$", id: 6 },
    { name: "Man Suit", image: s7, price: "1000$", id: 7 },
    { name: "Man Suit", image: s8, price: "1000$", id: 8 },
    { name: "Man Suit", image: s9, price: "1000$", id: 9 },
    { name: "Man Suit", image: s10, price: "1000$", id: 10 },
    { name: "Man Suit", image: s11, price: "1000$", id: 11 },
    { name: "Man Suit", image: s12, price: "1000$", id: 12 },
  ];
  return (
    <section id="suits">
      <div className="herobox">
        <Image  alt="image" className="hero-img" src={heroSuit}></Image>
        <div className="text">
          <p>Black Swan</p>
          <h1>EXQUISITE </h1>
          <h1>
            SUITS <span className="white-card">SINCE 1975</span>
          </h1>
          <p>New Collection</p>
        </div>
      </div>
      <div id="showcase">
        <h1 className="heading">OUR SUITS</h1>
        <div className="cards-container">
          {suits.map((suit) => (
            <Link href={"/men-suits/" + suit.id} key={suit.id}>
              <a>
                <Card data={suit} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suits;
