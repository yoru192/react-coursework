import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentCake } from "../../Redux/Slices/cakeSlice";

const CakePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, currentCake } = useSelector((state) => state.cake);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Convert id parameter to number (API uses numeric IDs)
  const numericId = parseInt(id, 10);

  useEffect(() => {
    console.log("CakePage useEffect running with id:", id);
    console.log("Current items in store:", items);

    setIsLoading(true);
    setError(null);

    const fetchCake = async () => {
      try {
        // First try to find in Redux store
        const existingCake = items.find(
          (cake) => cake.id === numericId || cake.id === id,
        );

        if (existingCake) {
          console.log("Found cake in Redux store:", existingCake);
          dispatch(setCurrentCake(existingCake));
          setIsLoading(false);
        } else {
          // If not in store, fetch from API
          console.log("Fetching cake from API...");
          const response = await axios.get(
            `https://68034ffb0a99cb7408eb9c5e.mockapi.io/cakes/${id}`,
          );
          console.log("API response:", response.data);

          if (response.data) {
            dispatch(setCurrentCake(response.data));
          } else {
            setError("Торт не знайдено");
          }
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error fetching cake:", err);
        setError("Помилка завантаження даних");
        setIsLoading(false);
      }
    };

    fetchCake();
  }, [id, items, dispatch, numericId]);

  // Debug output
  console.log("CakePage render - currentCake:", currentCake);
  console.log("CakePage render - isLoading:", isLoading);
  console.log("CakePage render - error:", error);

  if (isLoading) {
    return <div className="loading">Завантаження...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!currentCake || !currentCake.title) {
    return <div className="not-found">Торт не знайдено</div>;
  }

  return (
    <div className="product-page">
      <h1 className="product-title">
        Торт "{currentCake.title}" {currentCake.weight} кг
      </h1>

      {currentCake.imageUrl && (
        <div className="product-image">
          <img src={currentCake.imageUrl} alt={currentCake.title} />
        </div>
      )}

      <div className="price-badge">
        <span>Ціна: {currentCake.price} грн</span>
      </div>

      <div className="specifications">
        <h2>Характеристики торта</h2>
        <table>
          <tbody>
            <tr>
              <td>Вага</td>
              <td>{currentCake.weight} кг</td>
            </tr>
            <tr>
              <td>Основа</td>
              <td>{currentCake.specifications?.base || "Бісквітна"}</td>
            </tr>
            <tr>
              <td>Начинка</td>
              <td>
                {currentCake.specifications?.filling ||
                  "Шоколадний крем, горіхи, ягоди"}
              </td>
            </tr>
            <tr>
              <td>Декор</td>
              <td>
                {currentCake.specifications?.decor ||
                  "Шоколадна глазур, цукрові квіти"}
              </td>
            </tr>
            <tr>
              <td>Термін зберігання</td>
              <td>48 годин (в холодильнику)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="product-description">
        <h2>Опис торта "{currentCake.title}"</h2>
        <p>
          {currentCake.description ||
            "Розкішний багатоярусний торт для справжніх гурманів. Ніжний бісквіт з какао, прослоєний шоколадним кремом на основі бельгійського шоколаду. Додаткова начинка зі свіжих ягід та подрібнених горіхів пекан. Верх прикрашений ручною роботою з цукрової мастики та шоколадними декораціями."}
        </p>
      </div>

      <div className="product-features">
        <div className="feature-block">
          <h3>🏆 Переваги</h3>
          <ul>
            <li>Використання натуральних інгредієнтів</li>
            <li>Індивідуальний дизайн</li>
            <li>Без штучних барвників</li>
          </ul>
        </div>

        <div className="feature-block">
          <h3>⭐ Рейтинг</h3>
          <div className="rating">{currentCake.rating}/10 (127 відгуків)</div>
        </div>
      </div>

      <div className="order-notice">
        <p>
          * Замовлення приймаються за 3 дні до дати отримання. <br />*
          Можливість індивідуального оформлення.
        </p>
      </div>
    </div>
  );
};

export default CakePage;
