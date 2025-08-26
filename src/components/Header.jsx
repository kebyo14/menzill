import React, { useState } from "react";
import "./Header.scss";
import logo from "../images/logo.png";
import back from "../images/1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header" style={{ backgroundImage: `url(${back})` }}>
      <nav className="navbar">
       
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

       
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Product Catalog</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Fabrics</a></li>
          <li><a href="#">Our Clients</a></li>

          {/* языковые опции */}
          <div className="lang-switch">
            <button>RU</button>
            <button>UZ</button>
            <button>EN</button>
          </div>
        </ul>

     
        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      
      {menuOpen && (
        <div className="menu-overlay active" onClick={closeMenu}></div>
      )}

    
      <div className="header-content">
        <h1>FROM THREADS — CONNECTION, FROM CONNECTION — TRUST.</h1>
        <p>
          Your story in every stitch — handcrafted with love from natural knit
          yarn, these pieces bring warmth and comfort into your home.
        </p>
        <button className="cta">Get a Consultation</button>
      </div>
    </header>
  );
};

export default Header;
