import Image from "next/image";
import herobox from "../img/heromaybe.jpg";
import wColl from "../img/womenCollection.jpg";
import accsColl from "../img/accesoryes3.jpg";
import mColl from "../img/menCollection.jpg";
import Card from "../components/card";
import f1 from "../img/dress24.jpg";
import f2 from "../img/dress31.jpg";
import f3 from "../img/dress29.jpg";
import f4 from "../img/dress30.jpg";
import f5 from "../img/dress32.jpg";
import f6 from "../img/dress15.jpg";

import i1 from "../img/instaPost1.jpg";
import i2 from "../img/instaPost2.jpg";
import i3 from "../img/instaPost3.jpg";
import i4 from "../img/instaPost6.jpg";
import i5 from "../img/instaPost5.jpg";
import i6 from "../img/instaPost4.jpg";

import b1 from "../img/instElegant.jpg";
import b2 from "../img/menFas.jpg";

import Link from "next/link";

export default function Home() {
  const featured = [
    { name: "Featured Product", image: f1, id: 24, price: "1000$" },
    { name: "Featured Product", image: f2, id: 31, price: "1000$" },
    { name: "Featured Product", image: f3, id: 29, price: "1000$" },
    { name: "Featured Product", image: f4, id: 30, price: "1000$" },
    { name: "Featured Product", image: f5, id: 32, price: "1000$" },
    { name: "Featured Product", image: f6, id: 15, price: "1000$" },
  ];
  return (
    <section id="homepage">
      {/* herobox */}
      <div className="herobox">
        <Image alt="image" className="hero-img" src={herobox}></Image>
        <div className="text">
          <p>Black Swan</p>
          <h1>EXQUISITE </h1>

          <h1>
            FASHION <span className="white-card">SINCE 1975</span>
          </h1>
          <p>New Collection</p>
        </div>
      </div>
      {/* collections */}
      <div className="collections">
        <div className="first-row">
          <Image
            className="img collection-card "
            src={wColl}
            layout="fixed"
            width="450px"
            height="450px"
            alt="image"
          ></Image>
          <div className="box collection-card box-1">
            <h1>WOMEN </h1>
            <h2>C O L L E C T I O N</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              error.
            </p>
            <Link href={"/women-dresses"}>
              <a>Shop now</a>
            </Link>
          </div>
          <Image
            className="collection-card coll-img"
            src={accsColl}
            layout="fixed"
            width="450px"
            height="450px"
            alt="image"
          ></Image>
        </div>
        <div className="second-row">
          <div className="box collection-card box-3 ">
            <h1>MEN </h1>
            <h2>C O L L E C T I O N</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              error.
            </p>
            <Link href={"/men-suits"}>
              <a>Shop now</a>
            </Link>
          </div>
          <Image
            className="collection-card coll-img "
            src={mColl}
            layout="fixed"
            width="450px"
            height="450px"
            alt="image"
          ></Image>
          <div className="box collection-card box-2 ">
            <h1>ACCESORIES </h1>
            <h2>C O L L E C T I O N</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              error.
            </p>
            <Link href={"/accesories"}>
              <a>Shop now</a>
            </Link>
          </div>
        </div>
      </div>
      {/* banner */}
      <div id="banner">
        <div className="shipping">
          <p>FREE SHIPPING ALL OVER THE WORLD</p>
        </div>
        <div className="support">
          <p>ONLINE SUPPORT 24/7</p>
        </div>
        <div className="money">
          <p>MONEY BACK GUARANTEE</p>
        </div>
      </div>
      {/* featured products */}
      <div id="featured-products">
        <h1 className="heading">FEATURED PRODUCTS</h1>
        <div className="cards-container">
          {featured.map((product) => (
            <Link href={"/women-dresses/" + product.id} key={product.id}>
              <a>
                <Card data={product} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* from the blogs */}
      <div id="from-the-blog">
        <h1 className="heading">FROM THE BLOG</h1>
        <div className="from-the-blog-container">
          <Link href={"/blogs"} passHref>
            <div className="blog">
              <div className="blog-image">
                <Image alt="image" src={b1} layout="responsive"></Image>
              </div>
              <div className="bk">
                <h1 className="heading">Fashion and ettiquette</h1>
                <div className="clicks">
                  <p>November 17 2021 | Nikkita Cruz</p>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/blogs"} passHref>
            <div className="blog">
              <div className="blog-image">
                <Image alt="image" src={b2} layout="responsive"></Image>
              </div>
              <div className="bk">
                <h1 className="heading">The gentleman guide </h1>
                <div className="clicks">
                  <p>December 17 2021 | William Red</p>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* follow-insta section */}
      <div id="follow-us">
        <h1 className="heading">FOLLOW US AT @INSTAGRAM</h1>
        <div className="insta-container">
          <Image alt="image" src={i1} width="224px" height="200px"></Image>
          <Image alt="image" src={i5} width="224px" height="200px"></Image>
          <Image alt="image" src={i3} width="224px" height="200px"></Image>
          <Image alt="image" src={i4} width="224px" height="200px"></Image>
          <Image alt="image" src={i6} width="224px" height="200px"></Image>
          <Image alt="image" src={i2} width="224px" height="200px"></Image>
        </div>
      </div>
    </section>
  );
}
