import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./footer.scss";

//Import logos
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { LuChevronsUp } from "react-icons/lu";

//import images
import footerLogo from "../../assets/images/footer-logo.svg";
import facebook from "../../assets/icons/social/facebook.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import linkedin from "../../assets/icons/social/linkedin.svg";
import facebookMob from "../../assets/icons/social/facebook-m.svg";
import twitterMob from "../../assets/icons/social/twitter-m.svg";
import linkedinMob from "../../assets/icons/social/linkedin-m.svg";



function Footer() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer>
      <div onClick={scrollTop} className="scroll-top">
        <span> <LuChevronsUp /></span>

      </div>
      <div className="container">
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={footerLogo} alt="footer-logo" />
            </div>

            <div className="footer-desc">
              <p>
                “Bu, “Legit Solve Adviors” MMC-nin rəsmi saytıdır.
                Veb-saytımızda siz xidmətlərimiz və komandamızla tanış ola,
                qaunvericiliklə bağlı ən son xəbər və məlumatlardan xəbərdar ola
                bilərsiniz”
              </p>
            </div>

            <div className="footer-social">
              <div className="footer-social-item">
                <img src={twitter} alt="twitter" />
              </div>

              <div className="footer-social-item">
                <img src={facebook} alt="facebook" />
              </div>

              <div className="footer-social-item">
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-menu">
              <h3>{t('navigate')}</h3>
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
              </ul>
            </div>

            <div className="footer-menu">

            <h3>&nbsp;</h3>
              <ul>
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
            </div>

            <div className="footer-menu">
              <h3>Contact US</h3>
              <ul className="footer-contact">
                <li>
                  <a href="https://www.google.com/maps/place/Luxen+Plaza/@40.389882,49.8597685,19.5z/data=!3m1!5s0x40307d147970a4fd:0x876bb81e4ba89ad!4m14!1m7!3m6!1s0x40307d147ebe9949:0xbd1a03c2dc213e11!2sLuxen+Plaza!8m2!3d40.3898867!4d49.8605446!16s%2Fg%2F11c1szdsw5!3m5!1s0x40307d147ebe9949:0xbd1a03c2dc213e11!8m2!3d40.3898867!4d49.8605446!16s%2Fg%2F11c1szdsw5?entry=ttu" target="_blank">
                    {" "}
                    <span className="footer-icon">
                      <FaLocationDot />{" "}
                    </span>{" "}
                    Luxen Plaza, 8th floor, office Legit S.A.., Baku, Azerbaijan
                  </a>
                </li>

                <li>
                  <a href="mailto:İnfo@legitsa.az" target="_blank">
                    <span className="icon">
                      <IoMail />
                    </span>
                    İnfo@legitsa.az
                  </a>
                </li>
                <li>
                  <a className="footer-address" href="tel:123-456-7890">
                    <span className="icon">
                      <FaPhone />{" "}
                    </span>
                    +99450-000-00-00
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-social-mobile">
            <div className="footer-social-mobile-item">
              <img src={twitterMob} alt="twitter" />
            </div>

            <div className="footer-social-mobile-item">
              <img src={facebookMob} alt="facebook" />
            </div>

            <div className="footer-social-mobile-item">
              <img src={linkedinMob} alt="linkedin" />
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="copyright">
            © 2024 LEGİT S.A, Bütün hüquqlar qorunur
          </div>

          <div className="footer-bottom-menu">
            <ul>
              <li>
                <a href="">Terms & Conditions,</a>
              </li>
              <li>
                <a href="">Privacy Policy,</a>
              </li>
              <li>
                <a href="">Cookies Policy,</a>
              </li>
              <li>
                <a href="">Sitemap </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
