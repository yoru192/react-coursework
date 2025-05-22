import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../../components/Categories";
import ItemBlock from "../../components/ItemBlock";
import Skeleton from "./Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../Redux/Slices/cakeSlice";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useSelector((state) => state.filter);
  const { items } = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  const fetchItems = async () => {
    setIsLoading(true);
    setError(null);

    try {
      console.log("Fetching items with categoryId:", categoryId);
      const url = new URL("https://68034ffb0a99cb7408eb9c5e.mockapi.io/cakes");

      // Add parameters to the request
      if (categoryId > 0) {
        url.searchParams.append("category", categoryId);
      }
      // Можна збільшити ліміт до 10, щоб відображати більше тортів
      url.searchParams.append("limit", 4);

      console.log("API URL:", url.toString());

      const response = await axios.get(url.toString(), {
        headers: { "Content-Type": "application/json" },
      });

      console.log("API Data:", response.data);
      const arr = response.data;

      // Зберігаємо всі торти в Redux
      dispatch(setItems(Array.isArray(arr) ? arr : []));
      setIsLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Помилка завантаження даних");
      dispatch(setItems([]));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("Home useEffect running");
    fetchItems();
  }, [categoryId]);

  // Debug console logs
  console.log("Home render - items:", items);
  console.log("Home render - isLoading:", isLoading);

  return (
    <div className="home-page">
      <div className="content__top">
        <Categories />
      </div>
      <h2 className="content__title">Всі торти</h2>

      {error && <div className="error">{error}</div>}

      <div className="content__items">
        {isLoading ? (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        ) : Array.isArray(items) && items.length > 0 ? (
          items.map((item) => <ItemBlock key={item.id} {...item} />)
        ) : (
          <p>Торти не знайдено 😕</p>
        )}
      </div>
    </div>
  );
};

export default Home;
