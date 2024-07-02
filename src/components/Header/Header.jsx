import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleChangeLanguage = (lang) => {
    console.log(lang)
    setCurrentLanguage(lang);
    changeLanguage(lang);
  };

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
          <div onClick={() => setMobileMenu(false)} className="close">
            <img src={close} alt="close" />
          </div>
        </div>

        <nav className="mobile-menu-nav">
          <ul>
            <li onClick={()=>setMobileMenu(false)}>
              <Link to="/">{t("home")}</Link>
            </li>

            <li onClick={()=>setMobileMenu(false)}>
              <a href="/#about">{t("about")}</a>
            </li>

            <li onClick={()=>setMobileMenu(false)}>
              <Link to="/services">{t("services")}</Link>
            </li>

            <li onClick={()=>setMobileMenu(false)}>
              <a href="/#partners">{t("partners")}</a>
            </li>

            <li onClick={()=>setMobileMenu(false)}>
              <a href="#">{t("news")}</a>
            </li>

            <li onClick={()=>setMobileMenu(false)}
              >
              <a href="/#contact">{t("contact")}</a>
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
              <Link to="/">{t("home")}</Link>
            </li>

            <li>
              <a href="/#about">{t("about")}</a>
            </li>

            <li>
              <Link to="/services">{t("services")}</Link>
            </li>

            <li>
              <a href="/#partners">{t("partners")}</a>
            </li>

            <li>
              <a href="#">{t("news")}</a>
            </li>

            <li>
              <a href="#">{t("blog")}</a>
            </li>



            <li>
              <a href="/#contact">{t("contact")}</a>
            </li>

            <li>
              <a href="#">{t("sign")}</a>
            </li>
          </ul>
        </nav>

        <div className="lang-box">
          <select onChange={(e)=>handleChangeLanguage(e.target.value)} name="" id="">
            <option value="az">AZ</option>
            <option value="en">EN</option>
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
