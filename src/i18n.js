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
        about_company_title: "ABOUT COMPANY",
        about_company_p1: `"Menzill" LLC has been operating since May 2022. The company mainly manufactures knitted products in accordance with international standards and requirements, fulfilling the needs of its customers from Uzbekistan and various foreign companies.`,
        about_company_p2: `Products for babies, children, and adults (men, women, teenagers) are designed to be modern and comfortable. These products are made mostly from local fabrics and are strictly checked for quality and compliance with technical requirements before being delivered to customers.`,
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
        about_company_title: "О КОМПАНИИ",
        about_company_p1: `"Menzill" MChJ с мая 2022 года ведёт свою деятельность. Компания в основном производит трикотажные изделия по заказам фирм из Узбекистана и зарубежья в соответствии с международными стандартами и требованиями, удовлетворяя потребности клиентов.`,
        about_company_p2: `Продукция для младенцев, детей и взрослых (мужчин, женщин, подростков) разрабатывается по современному и удобному дизайну. Основная часть продукции производится из национальных тканей и проходит строгий контроль качества и соответствия техническим требованиям.`,
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
        about_company_title: "KOMPANIYA HAQIDA",
        about_company_p1: `"Menzill" MChJ 2022-yil may oyidan beri faoliyat yuritmoqda. Jamiyat asosan trikotaj mahsulotlari bo‘yicha O‘zbekiston va turli xorijiy davlatlardan keladigan buyurtmalarni xalqaro standartlar asosida ishlab chiqaradi va mijozlar ehtiyojini qondirib kelmoqda.`,
        about_company_p2: `Chaqaloqlar, bolalar va kattalar (erkaklar, ayollar, o‘smirlar) uchun zamonaviy va qulay dizayndagi mahsulotlar tayyorlanadi. Asosiy qismi milliy matolardan ishlab chiqarilib, mahsulotlar sifati va texnik talablariga mosligi sinchkovlik bilan tekshiriladi.`,
      },
    },
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
