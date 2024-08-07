import React from "react";
import FontAwesomeStar from "./FontAwesomeStar";
import FontAwesomeHalfStar from "./FontAwesomeHalfStar";
export default function Book({ book }) {
  
  const { title, url, originalPrice, salePrice, rating, author } = book;
  
  return (
    <div className="book">
      <div className="book__wrapper">
        <img className="book__img" src={url} alt="" />

        <div className="book__description">
          <div className="book__title">{title}</div>
          <p className="book__description--author">By : {author}</p>
          <div className="book__ratings">
            {new Array(Math.floor(rating)).fill(0).map((_, key) => (
              <FontAwesomeStar key={key} />
            ))}
            {!Number.isInteger(rating) && <FontAwesomeHalfStar />}
          </div>
          <div className="book__price">
            {salePrice ? (
              <>
                <span className="book__price--normal">
                  ${originalPrice.toFixed(2)}
                </span>
                ${salePrice.toFixed(2)}
              </>
            ) : (
              <>${originalPrice.toFixed(2)}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
