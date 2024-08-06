import React from 'react'
import { books } from "../data";
import Book from './ui/Book';
export default function Discounted() {
    console.log(books
        .filter((book) => book.salePrice!== null))
  return (
    <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discount <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                    {books
              .filter((book) => book.salePrice!== null)
              .slice(0, 9)
              .map((book) => (
                <Book key={book.id} book={book}/>
              ))}
                        
                    </div>
                </div>
            </div>
         
        </section>
  )
}
