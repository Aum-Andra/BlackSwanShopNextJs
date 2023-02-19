import Image from "next/image";
import logo from "../img/swanlogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="col-1">
        <h2>CONTACT</h2>
        <p className="line">____</p>
        <p>blackSwanShop@yahoo.com</p>
        <p>0465748377</p>
        <h4>Based in Romania, Craiova.We ship worldwide.</h4>
      </div>
      <div className="col-2">
        <div className="logo-section">
          <Image
           alt="image"
            src={logo}
            className="logo-img-f"
            width="100px"
            height="100px"
          ></Image>
          <h1>BLACK SWAN</h1>
        </div>
        <div className="social">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="col-3">
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <form className="footer-form">
          <input type="email" name="email" id="email" />
          <button className="btn">SUBSCRIBE</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
