import Header from './components/Header';
import ProductCarousel from "./components/ProductCarousel";
import './App.css';
import React from 'react';
import AboutCompany from "./components/AboutCompany/AboutCompany";
import FabricCarousel from "./components/FabricCarousel";

function App() {
  return (
    <div className="App">
    
      <Header />
      <AboutCompany />
      <ProductCarousel />
      <FabricCarousel />
    </div>
  );
}

export default App;
