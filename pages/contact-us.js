import Image from "next/image";
import contact from "/img/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <section id="contact">
      <div className="herobox">
        <Image
        alt="image"
          className="hero-img"
          src={contact}
          layout="responsive"
          height="500px"
        ></Image>
        <div className="text">
          <p>Black Swan</p>
          <h1>
            <span className="white-card">CONTACT US</span>
          </h1>
        </div>
      </div>
      <div className="main">
        <h1 className="heading">Get in touch with us!</h1>
        <div className="boxes">
          <div className="box b1">
            <FontAwesomeIcon className="icon" icon={faMobileScreenButton} />
            <h2>PHONE</h2>
            <p>Phone :0465748377</p>
            <p>Phone 2 :0465747234</p>
          </div>
          <div className="box b2">
            <FontAwesomeIcon className="icon" icon={faMapLocationDot} />
            <h2>ADRESS</h2>
            <p>Romania,Craiova,str. Stefan cel Mare,nr.3</p>
          </div>
          <div className="box b3">
            <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} />
            <h2>EMAIL</h2>
            <p>black-swan@yahoo.com</p>
            <p>blackSwanShop@yahoo.com</p>
          </div>
        </div>
        <div className="form">
          <h1 className="heading">If you got any questions</h1>
          <h1 className="heading">
            Please do not hesitate to send us a message
          </h1>
          <form>
            <input type="text" name="name" id="name" placeholder="Your name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <input type="text" name="title" id="title" placeholder="Title" />
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              placeholder="Your questions"
            ></textarea>
            <button className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
