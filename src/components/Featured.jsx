import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Crack from "../assets/crack the coding interview.png";

import { books } from "../data";
import Book from "./ui/Book";
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
          {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book key={book.id} book={book}/>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
