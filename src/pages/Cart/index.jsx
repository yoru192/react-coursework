import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Торт "Шоколадний рай"', price: 550, quantity: 1 },
    { id: 2, name: "Макаруни (6 шт.)", price: 180, quantity: 2 },
  ]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <svg
              width="30"
              height="30"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="black"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.5969 13.6667 13 14.2636 13 15C13 15.7364 13.5969 16.3333 14.3333 16.3333Z"
                stroke="black"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.78002 5H16.3334L15.1334 10.5933C15.0215 11.1227 14.7357 11.5989 14.3261 11.9435C13.9165 12.2882 13.4033 12.4832 12.8734 12.5H6.66669C6.1368 12.4832 5.62361 12.2882 5.21402 11.9435C4.80443 11.5989 4.51865 11.1227 4.40669 10.5933L3.66669 7M3.66669 7H1.66669M3.66669 7L4.78002 5M6.33335 5V3.33333C6.33335 3.15652 6.40359 2.98695 6.52861 2.86193C6.65363 2.7369 6.8232 2.66667 7.00002 2.66667H10.3334C10.5102 2.66667 10.6798 2.7369 10.8048 2.86193C10.9298 2.98695 11 3.15652 11 3.33333V5"
                stroke="black"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Кошик
          </h2>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="cart__header">
              <span>Товар</span>
              <span>Кількість</span>
              <span>Ціна</span>
              <span>Сума</span>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="cart__item">
                <div className="cart__item-info">
                  <h3>{item.name}</h3>
                </div>
                <div className="cart__item-quantity">{item.quantity} шт.</div>
                <div className="cart__item-price">{item.price} грн</div>
                <div className="cart__item-total">
                  <b>{item.price * item.quantity} грн</b>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="button button--circle"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L9 9M1 9L9 1"
                      stroke="#0d3b66"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ))}

            <div className="cart__summary">
              <div className="cart__summary-row">
                <span>Усього товарів:</span>
                <b>
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт.
                </b>
              </div>
              <div className="cart__summary-row total">
                <span>Сума замовлення:</span>
                <b>{total} грн</b>
              </div>
            </div>

            <div className="cart__actions">
              <Link to="/" className="button button--back">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Повернутись назад
              </Link>
              <Link to="/order" className="button button--primary">
                Оформити замовлення
              </Link>
            </div>
          </>
        ) : (
          <div className="cart cart--empty">
            <h2>Кошик порожній 😕</h2>
            <p>Схоже, ви ще не додали жодного товару</p>
            <img src="/empty-cart.svg" alt="Empty cart" />
            <Link to="/" className="button button--primary">
              Повернутись назад
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
