import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.svg";
import hamburgerMenuIcon from "../../assets/icons/common/hambuger-menu.svg"


function Header() {
  
  const[scrolled,setScrolled]=useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "sticky" : ""}>
      <div className="container">
        <div className="logo-img">
          <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>

            <li>
              <a href="/#about">About us</a>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>
            
            <li>
              <a href="/#partners">Partners</a>
            </li>

       

            <li>
              <a href="#">News</a>
            </li>

            <li>
              <a href="/#contact">Contact us</a>
            </li>
          </ul>
        </nav>

        <div className="lang-box">
          <select name="" id="">
            <option value="">AZ</option>
            <option value="">EN</option>
            <option value="">RU</option>
          </select>
        </div>

        <div className="hamburger-menu">
              <img src={hamburgerMenuIcon} alt="mobile-menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
