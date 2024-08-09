import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import Rating from "./Rating";
import PriceComponent from "./PriceComponent";
export default function Book({ book }) {
  const { id, title, url, originalPrice, salePrice, rating, author } = book;
  const [img, setImg] = useState();
  // const imageLoaded = () => {
  //   console.log("image loaded");
  // };
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = url;
    // console.log(mountedRef.current)
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
          mountedRef.current = false
        }
      }, 300);
    };

    // return () => (mountedRef.current = false);
  });
  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${id}`}>
            <figure className="book__img--wrapper">
              <img className="book__img" src={img.src} alt="" />
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
            <PriceComponent
              originalPrice={originalPrice}
              salePrice={salePrice}
            />
          </div>
        </>
      ) : (
        <div className="book__img--skeleton">
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </div>
      )}
    </div>
  );
}
