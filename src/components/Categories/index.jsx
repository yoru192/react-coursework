import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../Redux/Slices/filterSlice";
const Categories = () => {
  const categories = ["Всі", "Фруктові", "Ванільні", "Шоколадні"];

  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => dispatch(setCategoryId(index))}
            className={categoryId === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
