import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";
export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="text__purple">Library?</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              subTitle="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ Books"
              subTitle="Library has books in all your favourite categories."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              subTitle=" Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
