import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.svg";
import mobileLogo from "../../assets/images/mobile-logo.svg";
import hamburgerMenuIcon from "../../assets/icons/common/hambuger-menu.svg";
//Social Icons
import close from "../../assets/icons/common/close.svg";
import facebook from "../../assets/icons/social/facebook.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import linkedin from "../../assets/icons/social/linkedin.svg";
import searchIco from "../../assets/icons/search/searchIco.svg";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@/redux/common/commonSlice";

function Header() {
  const { t, ready, i18n } = useTranslation();
  const dispatch = useDispatch();
  // const [currentLanguage, setCurrentLanguage] = useState(language);
  const [scrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();
  const lang = useSelector((store) => store.common.lang);

  if (!ready) return "loading translations...";
  const servicesData = t("servicesData", { returnObjects: true });
  const consultationData = t("consultationData", { returnObjects: true });

  const handleChange = (e) => {
    const newLang = e.target.value;
    dispatch(setLang(newLang));
    const scrollPosition = window.scrollY;
    setTimeout(() => window.scrollTo(0, scrollPosition), 0);
  };

  const handleMobileDropDown = (id) => {
    setMobileDropdown(id != mobileDropdown ? id : null);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true);
    }
  }, [location.pathname]);

  //fix mobile menu scroll
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenu]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <header className={scrolled && "sticky"}>
      <div className={`mobile-menu ${mobileMenu && "active"}`}>
        <div className="mobile-menu-logo">
          <img src={mobileLogo} alt="logo" />
          <div onClick={() => setMobileMenu(false)} className="close">
            <img src={close} alt="close" />
          </div>
        </div>

        <nav className="mobile-menu-nav">
          <ul>
            <li onClick={() => setMobileMenu(false)}>
              <Link to="/">{t("home")}</Link>
            </li>

            <li onClick={() => setMobileMenu(false)}>
              <a href="/#about">{t("about")}</a>
            </li>

            <li onClick={() => handleMobileDropDown(1)}>
              <Link to="/">
                {t("services")}{" "}
                {mobileDropdown == 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
              </Link>
              <ul
                className={`${mobileDropdown == 1 && "active"} mobile-dropdown`}
              >
                {servicesData.map((item) => (
                  <li>
                    <Link to={`/service/${item.id}`} key={item.id}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li onClick={() => setMobileMenu(false)}>
              <a href="/#partners">{t("partners")}</a>
            </li>

            <li onClick={() => setMobileMenu(false)}>
              <a href="#">{t("news")}</a>
            </li>

            <li onClick={() => setMobileMenu(false)}>
              <a href="#">{t("blog")}</a>
            </li>

            <li onClick={() => setMobileMenu(false)}>
              <a href="/#contact">{t("contact")}</a>
            </li>

            <li onClick={() => setMobileMenu(false)}>
              <a href="#">{t("sign")}</a>
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
              <a href="/#about-sc">{t("about")}</a>
            </li>

            <li>
              <Link to="/services">{t("services")}</Link>
              <ul className="dropdown">
                {servicesData.map((item) => (
                  <Link to={`/service/${item.id}`} key={item.id}>
                    <li>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </li>

            <li>
              <a href="/#partners">{t("partners")}</a>
            </li>

            <li>
              <NavLink to="/news">{t("news")}</NavLink>
            </li>

            <li>
              <NavLink to="/blog">{t("blog")}</NavLink>
            </li>

            <li>
              <a href="/#contact">{t("contact")}</a>
            </li>

            <li>
              <a href={void 0}>{t("sign")}</a>
              <ul className="dropdown">
                {consultationData.map((item) => (
                  <Link to={`/`} key={item.id}>
                    {" "}
                    <li>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/career">{t("career")}</NavLink>
            </li>
          </ul>
        </nav>

        <div className="lang-select">
          {/* <div className="selected-lang">
            <span>{language.toLocaleUpperCase()} </span>{" "}
            <span className="lang-icon">
              {" "}
              <img src={selectArrow} alt="lang-arrow" />
            </span>
          </div> */}

          {/* <div className="lang-box"> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="language-select"
            value={lang}
            // onChange={(e) => dispatch(setLang(e.target.value))}
            onChange={handleChange}
          >
            <MenuItem value={"az"}>AZ</MenuItem>
            <MenuItem value={"en"}>EN</MenuItem>
          </Select>
          {/* <ul>
              <li onClick={() => handleChangeLanguage("az")}>AZ</li>
              <li onClick={() => handleChangeLanguage("en")}>EN</li>
            </ul> */}
          {/* </div> */}
          <div className="search-ico">
            <Link to="search">
              <img src={searchIco} alt="" />
            </Link>
          </div>
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
