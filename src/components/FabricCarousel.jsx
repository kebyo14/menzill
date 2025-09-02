import React, { useState } from "react";
import "./FabricCarousel.scss";

import img1 from "../images/9.png";
import img2 from "../images/10.png";
import img3 from "../images/11.png";
import img4 from "../images/12.png";
import img5 from "../images/10.png";

const categories = ["Новорожденные", "Детские", "Подростковые", "Для мужчин", "Для женщин"];

const items = [
  { id: 1, title: "Кулирная гладь", desc: "Легкий, тонкий трикотаж, часто используемый для пошива летней одежды. Не растягивается в длину, но хорошо тянется в ширину", img: img1 },
  { id: 2, title: "Кулирная гладь", desc: "Легкий, тонкий трикотаж, часто используемый для пошива летней одежды. Не растягивается в длину, но хорошо тянется в ширину", img: img2 },
  { id: 3, title: "Кулирная гладь", desc: "Легкий, тонкий трикотаж, часто используемый для пошива летней одежды. Не растягивается в длину, но хорошо тянется в ширину", img: img3 },
  { id: 4, title: "Кулирная гладь", desc: "Легкий, тонкий трикотаж, часто используемый для пошива летней одежды. Не растягивается в длину, но хорошо тянется в ширину", img: img4 },
  { id: 5, title: "Кулирная гладь", desc: "Легкий, тонкий трикотаж, часто используемый для пошива летней одежды. Не растягивается в длину, но хорошо тянется в ширину", img: img5 },
];

const FabricCarousel = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="fabric-carousel">
        <div className="container">
        <h2 className="fabric-title">ТОЛЬКО САМЫЕ КАЧЕСТВЕННЫЕ ТКАНИ</h2>

<div className="categories">
  {categories.map((cat, i) => (
    <button
      key={i}
      className={`category-btn ${activeCategory === cat ? "active" : ""}`}
      onClick={() => setActiveCategory(cat)}
    >
      {cat}
    </button>
  ))}
</div>

<div className="scroll-wrapper">
  <div className="items">
    {items.map((item) => (
      <div className="item" key={item.id}>
        <img src={item.img} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
</div>
        </div>
     
    </div>
  );
};

export default FabricCarousel;
