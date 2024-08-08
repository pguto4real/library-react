import React from "react";
import FontAwesomeArrowLeft from "../components/ui/FontAwesomeArrowLeft";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import PriceComponent from "../components/ui/PriceComponent";
import Rating from "../components/ui/Rating";
export default function BookInfo({ books }) {
  const { id } = useParams();

  const [data, setBooksDetail] = useState(
    books.filter((book) => book.id === parseInt(id))
  );
  const { url, title, salePrice, rating, originalPrice, author } = data[0];
  console.log(data);
  return (
    <div className="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books">
                <FontAwesomeArrowLeft></FontAwesomeArrowLeft>
              </Link>{" "}
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
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="books__container">
          <div class="row">
            <div class="book__selected--top">
              <h2 class="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              <div className="book">
                <a href="/books/2">
                  <figure className="book__img--wrapper">
                    <img
                      src="https://covers.openlibrary.org/b/id/10958382-L.jpg"
                      alt=""
                      className="book__img"
                    />
                  </figure>
                </a>
                <div className="book__title">
                  <a className="book__title--link" href="/books/2">
                    Atomic Habits
                  </a>
                </div>
                <div className="book__ratings">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </div>
                <div className="book__price">$39.00</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
