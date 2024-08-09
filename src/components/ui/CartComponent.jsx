import React from "react";

export default function CartComponent({ cart, changeQuantity ,removeItem}) {
  return (
    <div className="cart__item">
      <div className="cart__book">
        <img src={cart.url} className="cart__book--img" alt="" />
        <div className="cart__book--info">
          <span className="cart__book--title">{cart.title}</span>
          <span className="cart__book--price">
            $
            {cart.salePrice
              ? cart.salePrice.toFixed(2)
              : cart.originalPrice.toFixed(2)}
          </span>
          <button onClick={()=>removeItem(cart)} className="cart__book--remove">Remove</button>
        </div>
      </div>
      <div className="cart__quantity">
        <input
        onChange={(event) => changeQuantity(cart,event.target.value)}
          type="number"
          min="0"
          max="99"
          className="cart__input"
          value={cart.quantity}
        />
      </div>
      <div className="cart__total">
        $
        {cart.salePrice
          ? (cart.salePrice * cart.quantity).toFixed(2)
          : (cart.originalPrice * cart.quantity).toFixed(2)}
      </div>
    </div>
  );
}
