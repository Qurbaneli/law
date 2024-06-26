import React from "react";
import "./footer.scss";
//import images

import footerLogo from "../../assets/images/footer-logo.svg";
import facebook from "../../assets/icons/social/facebook.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import linkedin from "../../assets/icons/social/linkedin.svg";
import facebookMob from "../../assets/icons/social/facebook-m.svg";
import twitterMob from "../../assets/icons/social/twitter-m.svg";
import linkedinMob from "../../assets/icons/social/linkedin-m.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={footerLogo} alt="footer-logo" />
            </div>

            <div className="footer-desc">
              <p>
                Efforlessly manage and organize chats, tasks, and files in one
                centeral location with Qoterra chat management solutions
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
              <h3>Navigate</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Porduct</a>
                </li>
                <li>
                  <a href="#">Feature</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>

            <div className="footer-menu">
              <h3>Support Us</h3>
              <ul>
                <li>
                  <a href="#"> FAQ`s</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>

            <div className="footer-menu">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#"> Community</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Tems of</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
              </ul>
            </div>

            <div className="footer-menu">
              <h3>Contact US</h3>
              <ul>
                <li>
                  <a href="mailto:qoterra@business.com" target="_blank">
                    {" "}
                    Qoterra@business.com
                  </a>
                </li>
                <li>
                  <a className="footer-address" href="tel:123-456-7890">
                    +91-80-65652545
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
