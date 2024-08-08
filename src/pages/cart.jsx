import React from "react";

export default function cart() {
  return (
    <div id="books__body">
      <main id="books__main">
        <div class="books__container">
          <div class="row">
            <div class="book__selected--top">
              <h2 class="cart__title">Cart</h2>
            </div>
            <div class="cart">
              <div class="cart__header">
                <span class="cart__book">Book</span>
                <span class="cart__quantity">Quantity</span>
                <span class="cart__total">Price</span>
              </div>
              <div class="cart__body">
                <div class="cart__item">
                  <div class="cart__book">
                    <img
                      src="https://covers.openlibrary.org/b/id/10425061-L.jpg"
                      class="cart__book--img"
                      alt=""
                    />
                    <div class="cart__book--info">
                      <span class="cart__book--title">Can't Hurt Me</span>
                      <span class="cart__book--price">$29.00</span>
                      <button class="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div class="cart__quantity">
                    <input
                      type="number"
                      min="0"
                      max="99"
                      class="cart__input"
                      value="1"
                    />
                  </div>
                  <div class="cart__total">$29.00</div>
                </div>
                <div class="cart__item">
                  <div class="cart__book">
                    <img
                      src="https://covers.openlibrary.org/b/id/10425061-L.jpg"
                      class="cart__book--img"
                      alt=""
                    />
                    <div class="cart__book--info">
                      <span class="cart__book--title">Can't Hurt Me</span>
                      <span class="cart__book--price">$29.00</span>
                      <button class="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div class="cart__quantity">
                    <input
                      type="number"
                      min="0"
                      max="99"
                      class="cart__input"
                      value="1"
                    />
                  </div>
                  <div class="cart__total">$29.00</div>
                </div>
              </div>
            </div>
            <div class="total">
              <div class="total__item total__sub-total">
                <span>Subtotal</span>
                <span>$26.10</span>
              </div>
              <div class="total__item total__tax">
                <span>Tax</span>
                <span>$2.90</span>
              </div>
              <div class="total__item total__price">
                <span>Total</span>
                <span>$29.00</span>
              </div>
              <button class="btn btn__checkout no-cursor">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
