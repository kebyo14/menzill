import React from "react";
import "./AboutCompany.scss";
import a7 from "../../images/7.png";
import a8 from "../../images/8.png";

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="about-company__content">
        <h2>О КОМПАНИИ</h2>
        <p>
          "Menzill" MChJ 2022 yil may oyidan beri oʻz faoliyatini olib boradi.
          Jamiyat asosan trikotaj mahsulotlari boʻyicha talab va takliflarni
          Oʻzbekiston va turli xil chet davlatlari firmalaridan kelib tushadigan
          buyurtmalarni halqaro standartlar va talablar mos ravishda ishlab
          chiqarib, oʻz mushtariylarini ehtiyojlarini bajariib kelmoqda.
        </p>
        <p>
          Chaqaloqlar, yosh bolalar, kattalar (erkak, ayol, oʻsmir yoshdagi
          bolalar) uchun zamonaviy va qulay Design lar boʻyicha tayyorlanadigan
          mahsulotlar nafaqat buyurtmachini balki sotib oluvchilar uchun ham
          mamnuniyat bilan kundalik hayotda sevib foydalanishlarini
          sabablanidir. Asosiy qismi milliy mahsulotlardan tayyorlanadigan
          matolardan tikilib, sotib oluvchilarga yetkazib berilayotgan
          mahsulotlarni barcha jarayonlaridan oʻtishdagi sifat nazorati va
          texnik talablariga mos boʻlishligi sinchkovlik bilan tekshirib
          boriladi.
        </p>
      </div>

      <div className="about-company__images">
        <img src={a7} alt="Green fabric" className="img-green" />
        <img src={a8} alt="Blue fabric" className="img-blue" />
      </div>
    </section>
  );
};

export default AboutCompany;
