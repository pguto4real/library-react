import React from 'react'
import Book from './Book'

export default function Feature({books,exclude}) {
  
  return (
   <>
   {books
              .filter((book) => (exclude ? book.rating === 5 && book.id !== parseInt(exclude):book.rating === 5))
              .slice(0, 4)
              .map((book) => (
                <Book key={book.id} book={book}/>
              ))}</>
  )
}
