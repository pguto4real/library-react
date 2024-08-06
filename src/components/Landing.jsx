import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
export default function Landing() {
  return (
    <section id="landing"> 
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__description--title">
              America's most awarded online library platform
            </h1>
            <h2 className="header__description--sub-title">
              Find your dream book with{" "}
              <span className="text__purple">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt=""/>
                </figure>
        </div>
      </header>
    </section>
  );
}
