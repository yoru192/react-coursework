import React, { useState } from "react";
import { Link } from "react-router";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    postalCode: "",
  });

  // Simulated cart data from context/local storage
  const cartItems = [
    { id: 1, name: 'Торт "Шоколадний рай"', price: 550, quantity: 1 },
    { id: 2, name: "Макаруни (6 шт.)", price: 180, quantity: 2 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Замовлення оформлено!");
    // Here you would typically send the data to an API or handle it accordingly
  };

  // Calculate totals
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Оформити замовлення</h1>
      </div>

      <div className="checkout-content">
        {/* Cart Items Table */}
        <div className="cart-items-table">
          <div className="table-header">
            <span className="column product">Товар</span>
            <span className="column quantity">Кількість</span>
            <span className="column price">Ціна</span>
            <span className="column total">Сума</span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="table-row">
              <span className="column product">{item.name}</span>
              <span className="column quantity">{item.quantity} шт.</span>
              <span className="column price">{item.price} грн</span>
              <span className="column total">
                {item.price * item.quantity} грн
              </span>
              <button className="button button--circle">
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

          <div className="table-footer">
            <div className="total-row">
              <span>Усього товарів:</span>
              <span>{totalItems} шт.</span>
            </div>
            <div className="total-row">
              <span>Сума замовлення:</span>
              <span className="total-amount">{totalAmount} грн</span>
            </div>
          </div>
        </div>

        {/* Delivery Details */}
        <div className="delivery-details">
          <h2>Деталі доставки</h2>
          <p className="required-fields">* Всі поля мають бути заповнені</p>

          <div className="delivery-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Ім'я*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Місто*</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="surname">Прізвище*</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Адреса*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="postalCode">Поштовий індекс*</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Телефон*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <Link to="/cart">
                <button className="back-button">Повернутись назад</button>
              </Link>
              <button className="order-button" onClick={handleSubmit}>
                Замовити!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
