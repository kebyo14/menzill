import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: "About Us",
        catalog: "Product Catalog",
        gallery: "Gallery",
        fabrics: "Fabrics",
        clients: "Our Clients",
        title: "FROM THREADS — CONNECTION, FROM CONNECTION — TRUST.",
        desc: "Your story in every stitch — handcrafted with love from natural knit yarn, these pieces bring warmth and comfort into your home.",
        button: "Get a Consultation",
      },
    },
    ru: {
      translation: {
        about: "О нас",
        catalog: "Каталог продукции",
        gallery: "Галерея",
        fabrics: "Ткани",
        clients: "Наши клиенты",
        title: "ИЗ НИТЕЙ — СВЯЗЬ, ИЗ СВЯЗИ — ДОВЕРИЕ.",
        desc: "Ваша история в каждом стежке — вручную, с любовью из натуральной пряжи, эти изделия принесут тепло и уют в ваш дом.",
        button: "Получить консультацию",
      },
    },
    uz: {
      translation: {
        about: "Biz haqimizda",
        catalog: "Mahsulot katalogi",
        gallery: "Galereya",
        fabrics: "Mato",
        clients: "Mijozlarimiz",
        title: "IPDAN — ALOQA, ALOQADAN — ISHONCH.",
        desc: "Har bir chokda sizning hikoyangiz — tabiiy ipdan qo‘l mehnati bilan yaratilgan buyumlar uyingizga issiqlik va qulaylik olib keladi.",
        button: "Konsultatsiya olish",
      },
    },
  },
  lng: "en", // язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
