import React from "react";
import FontAwesomeArrowLeft from "../components/ui/FontAwesomeArrowLeft";
import { Link, useParams } from "react-router-dom";

import PriceComponent from "../components/ui/PriceComponent";
import Rating from "../components/ui/Rating";
import Feature from "../components/ui/Feature";
export default function BookInfo({ books, addToCart, cartData }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  const { url, title, salePrice, rating, originalPrice, author } = book;
  function bookExistInCart() {
    return cartData.find((book) => +book.id === +id);
  }

  return (
    <div className="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books">
                <FontAwesomeArrowLeft></FontAwesomeArrowLeft>
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{title}</h2>
                <div className="book__ratings">
                  <Rating rating={rating} />
                </div>
                <div className="book__selected--price">
                  <div className="book__price">
                    <PriceComponent
                      originalPrice={originalPrice}
                      salePrice={salePrice}
                    />
                  </div>
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis nisi culpa totam. Laudantium iusto praesentium
                    tempora consequatur repellat aperiam, minima nulla, omnis ex
                    ipsa architecto magnam, qui eligendi sit deleniti?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis nisi culpa totam. Laudantium iusto praesentium
                    tempora consequatur repellat aperiam, minima nulla, omnis ex
                    ipsa architecto magnam, qui eligendi sit deleniti?
                  </p>
                </div>
                {bookExistInCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              <Feature books={books} exclude={id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
