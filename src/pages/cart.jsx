import { useEffect, useState } from "react";
import CartComponent from "../components/ui/CartComponent";
import EmptyCart from "../assets/empty_cart-HzaV3V1A.svg";
import { Link } from "react-router-dom";
export default function Cart({
  changeQuantity,
  cartData,
  cartTotalValue,
  tax,
  cartValue,
  removeItem,
}) {
  function Isempty() {
    return cartData.length > 0;
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              {Isempty() ? (
                <div className="cart__body">
                  {cartData.map((cart, index) => (
                    <CartComponent
                      removeItem={removeItem}
                      index={index}
                      key={cart.id}
                      changeQuantity={changeQuantity}
                      cart={cart}
                    />
                  ))}
                </div>
              ) : (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any books in your cart!</h2>

                  <Link to="/books">
            
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>
            {Isempty() && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${cartValue}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${cartTotalValue}</span>
                </div>
                <button className="btn btn__checkout no-cursor">
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
