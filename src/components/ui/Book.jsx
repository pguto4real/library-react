import React from "react";

import { Link } from "react-router-dom";
import Rating from "./Rating";
import PriceComponent from "./PriceComponent";
export default function Book({ book }) {
  
  const { id,title, url, originalPrice, salePrice, rating, author } = book;
  
  return (
    <div className="book">
     <Link to={`/books/${id}`}>
        <figure className="book__img--wrapper">
        <img className="book__img" src={url} alt="" />
        </figure>
        
        </Link>
        <div className="book__title">
        <Link to={`/books/${id}`}>
          <div className="book__title--link">{title}</div>
          </Link>
          </div>
          <p className="book__description--author">By : {author}</p>
          <div className="book__ratings">
            <Rating rating={rating} />
          </div>
          <div className="book__price">
            <PriceComponent originalPrice={originalPrice} salePrice={salePrice}/>
          </div>
       
     
    </div>
  );
}
