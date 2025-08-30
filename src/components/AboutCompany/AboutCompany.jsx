import React from "react";
import "./AboutCompany.scss";
import a7 from "../../images/7.png";
import a8 from "../../images/8.png";
import { useTranslation } from "react-i18next";

const AboutCompany = () => {
  const { t } = useTranslation();

  return (
    <section className="about-company">
      <div className="about-company__content">
        <h2>{t("about_company_title")}</h2>
        <p>{t("about_company_p1")}</p>
        <p>{t("about_company_p2")}</p>
      </div>

      <div className="about-company__images">
        <img src={a7} alt="Green fabric" className="img-green" />
        <img src={a8} alt="Blue fabric" className="img-blue" />
      </div>
    </section>
  );
};

export default AboutCompany;
