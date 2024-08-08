import React from 'react'
import Book from './Book'

export default function Feature({books}) {
  return (
   <>
   {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book key={book.id} book={book}/>
              ))}</>
  )
}
