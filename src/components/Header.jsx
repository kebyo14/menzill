import React, { useState } from "react";
import "./Header.scss";
import logo from "../images/logo.png";
import back from "../images/1.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header" style={{ backgroundImage: `url(${back})` }}>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">{t("about")}</a></li>
          <li><a href="#">{t("catalog")}</a></li>
          <li><a href="#">{t("gallery")}</a></li>
          <li><a href="#">{t("fabrics")}</a></li>
          <li><a href="#">{t("clients")}</a></li>

          
          <div className="lang-switch">
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <button onClick={() => changeLanguage("uz")}>UZ</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
          </div>
        </ul>

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </div>
      </nav>

      {menuOpen && (
        <div className="menu-overlay active" onClick={closeMenu}></div>
      )}

      <div className="header-content">
        <h1>{t("title")}</h1>
        <p>{t("desc")}</p>
        <button className="cta">{t("button")}</button>
      </div>
    </header>
  );
};

export default Header;
