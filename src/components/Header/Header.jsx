import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.svg";
import mobileLogo from "../../assets/images/mobile-logo.svg";
import hamburgerMenuIcon from "../../assets/icons/common/hambuger-menu.svg";

//Social Icons
import close from "../../assets/icons/common/close.svg";
import facebook from "../../assets/icons/social/facebook.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import linkedin from "../../assets/icons/social/linkedin.svg";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
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
      <div className={`mobile-menu ${mobileMenu ? "active" : ""}`}>
        <div className="mobile-menu-logo">
          <img src={mobileLogo} alt="logo" />
          <div onClick={()=>setMobileMenu(false)} className="close">
            <img src={close} alt="close" />
          </div>
        </div>

        <nav className="mobile-menu-nav">
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

        <div className="mobile-menu-social">
          <div className="mobile-menu-social-item">
            <img src={twitter} alt="twitter" />
          </div>

          <div className="mobile-menu-social-item">
            <img src={facebook} alt="facebook" />
          </div>

          <div className="mobile-menu-social-item">
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="logo-img">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav className="desktop-nav">
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
          </select>
        </div>

        <div
          onClick={() => setMobileMenu(!mobileMenu)}
          className="hamburger-menu"
        >
          <img src={hamburgerMenuIcon} alt="mobile-menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
