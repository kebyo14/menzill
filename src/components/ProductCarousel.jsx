import React, { useState } from "react";
import "./ProductCarousel.scss";


import item1 from "../images/2.png";
import item2 from "../images/3.png";
import item3 from "../images/4.png";
import item4 from "../images/5.png";
import item5 from "../images/6.png";

const categories = ["Новорожденные", "Детские", "Подростковые", "Для мужчин", "Для женщин"];

const items = [
  { id: 1, title: "Одежды первого и второго слоя", img: item1 },
  { id: 2, title: "Комбинезоны", img: item2 },
  { id: 3, title: "Боди", img: item3 },
  { id: 4, title: "Песочники", img: item4 },
  { id: 5, title: "Шапочки", img: item5 },
];

const ProductCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("Новорожденные");

  return (
    <div className="product-section">
      <h1 className="section-title">Мы производим под ваш дизайн</h1>

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {items.map((item) => (
          <div className="grid-item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
