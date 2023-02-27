import Image from "next/image";
import logo from "../img/swanlogo.jpg";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  let IsDesktopOrPhone = useMediaQuery("(max-width:800px)");

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href={"/"}>
          <a>
            <Image alt="image" src={logo}></Image>
          </a>
        </Link>
      </div>
      <div className="actions">
        <Link href={"/shopping-cart"} passHref>
          <FontAwesomeIcon className="icon sb " icon={faBagShopping} />
        </Link>

        {(menu === true || IsDesktopOrPhone === false) && (
          <div className="links ">
            <Link href={"/"}>
              <a onClick={() => setMenu(false)}>Home</a>
            </Link>
            <Link href={"/women-dresses"}>
              <a onClick={() => setMenu(false)}>Women Dresses</a>
            </Link>
            <Link href={"/men-suits"}>
              <a onClick={() => setMenu(false)}>Men Suits</a>
            </Link>
            <Link href={"/accesories"}>
              <a onClick={() => setMenu(false)}>Accesories</a>
            </Link>
            <Link href={"/blogs"}>
              <a onClick={() => setMenu(false)}>Blogs</a>
            </Link>
            <Link href={"/contact-us"}>
              <a onClick={() => setMenu(false)}>Contact Us</a>
            </Link>
          </div>
        )}
        <button onClick={() => handleClick()} className="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
