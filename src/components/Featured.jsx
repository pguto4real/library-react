import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Crack from "../assets/crack the coding interview.png";
import { books } from "../data";
import Feature from "./ui/Feature";

export default function Featured() {
    function getStar(number) {
        let star = "";
        for (let i = 1; i <= Math.floor(number); i++) {
          return <FontAwesomeIcon icon='star'/>
      
        }
        if (!Number.isInteger(number)) {
          <>half star</>
        }
        return star;
      }
      getStar(4)
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
          <Feature books={books}/>
          </div>
        </div>
      </div>
    </section>
  );
}
