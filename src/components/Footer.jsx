import React from "react";
import LibraryLogo from "../assets/Library.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row__column">
          <a href="#" className="footer__anchor">
            <figure className="footer__logo--img">
              <img src={LibraryLogo} alt="" className="logo" />
            </figure>
            {/* <span className="footer__logo--popper">
              Top <i className="fas fa-arrow-up"></i>{" "}
            </span> */}
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link" target="_blank">
              Home
            </a>
            <span className="footer__link no-cursor">About</span>
            <a
              href="/books"
              className="footer__link"
              target="_blank"
            >
              Books
            </a>
            <a
              href="/cart"
              className="footer__link"
              target="_blank"
            >
              Cart
            </a>
          </div>
          <div className="footer__copyright">
            Copywright &copy; 2021 Library
          </div>
        </div>
      </div>
    </footer>
  );
}
