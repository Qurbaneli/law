import React from "react";
import "./news.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NewsImg from "../../assets/images/news/2.jpg";

const Blog = () => {
  const {
    t,
    ready,
    i18n: { language },
  } = useTranslation();
  return (
    <section className="news">
      <div className="container">
        <h1 className="news__title">{t("news")}</h1>

        <div className="news-grid">
          {Array.from({ length: 15 }).map((item) => {
            return (
              <div className="card">
                <div className="img-box">
                  <img src={NewsImg} alt="img" />
                </div>
                <div className="info">
                  <h3 className="info__title ellipse">
                    Lorem ipsum dolor sit amet.
                  </h3>

                  <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem repudiandae neque consequatur aliquam, architecto
                    placeat.
                  </p>

                  <p className="info__date">2022.12.12</p>

                  <div className="info__line"></div>
                </div>
                <Link className="news-link" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
