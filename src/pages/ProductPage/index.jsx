import React from "react";
const Product = () => {
  const product = {
    id: 1,
    name: 'Торт "Шоколадний рай"',
    price: "550 грн",
    description: "Ніжний шоколадний бісквіт з вершково-малиновим кремом.",
    image: "https://example.com/chocolate-cake.jpg",
  };

  return (
    <div className="product_page">
      <div className="product_page__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product_page__info">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <button>Додати в кошик</button>
      </div>
    </div>
  );
};

export default Product;
