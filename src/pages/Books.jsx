import React from "react";
import Book from "../components/ui/Book";

import { useEffect, useState } from "react";
export default function Books({books}) {
    const [allBooks, setBooks] = useState(books);

    function filterBooks(event){
        console.log(event.target.value)
        let filter = event.target.value
        let new_book;
        if (filter === 'LOW_TO_HIGH') {
            new_book = books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
            console.log(new_book)
          } else if (filter === 'HIGH_TO_LOW') {
            new_book =  books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
            console.log(new_book)
          }
          else if (filter === 'RATING_HIGH_TO_LOW') {
            new_book = books.slice().sort((a, b) => b.rating - a.rating);
            console.log(new_book)
          }
          else {
            new_book = books.slice().sort((a, b) => a.rating - b.rating);
            console.log(new_book)
          }
          setBooks(new_book)
        
    }
   
  return (
    <div id="books__body">
      <main className="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select name="" id="filter" defaultValue="DEFAULT" onChange={(event)=>filterBooks(event)}>
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low To High</option>
                  <option value="HIGH_TO_LOW">Price, High To Low</option>
                  <option value="RATING_HIGH_TO_LOW">Rating, High To Low</option>
                  <option value="RATING_LOW_TO_HIGH">Rating, Low To High</option>
                </select>
              </div>
              <div className="books">
                {allBooks.map((book) => (
                  <Book key={book.id} book={book} />
                ))}

                {/* <i className="fas fa-spinner books__loading--spinner"></i> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
