/* eslint-disable */

import {
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const getCopyrightText = `© ${new Date().getFullYear()} | All Rights Reserved`;

  return (
    <footer className="footer">
      <div className="footer-text-container">
        <div className="developer-txt">
          <p>
            Developed with{" "}
            <a
              className="link"
              target="_blank"
              href="https://gautam-balamurali.netlify.app/"
              rel="noopener noreferrer"
            >
              <span className="heart">
                <FaHeart size={12} />
              </span>
            </a>{" "}
            by Gautam Balamurali
          </p>
        </div>
        <div className="copyrt-txt">
          <p>{getCopyrightText}</p>
        </div>
      </div>
      <ul className="social-media-icons unordered list-inline">
        <li>
          <a
            className="link"
            target="_blank"
            href="https://github.com/gautam-balamurali"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/gautam-balamurali"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            href="https://twitter.com/codewithash"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            href="https://www.instagram.com/gautam.bm/"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
