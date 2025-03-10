import React, { useEffect, useState } from "react";
import "./news.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Empty, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllNewsAsync } from "@/redux/newsAll/newsAllSlice";
import { IMAGES_URL } from "@/api/api";
import common from "@/locale/common.json";
import { ClipLoader } from "react-spinners";

const News = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const lang = useSelector((store) => store.common.lang);
  const { t } = useTranslation();

  const {
    data: allNewsData,
    total,
    per_page,
    loading,
  } = useSelector((state) => state.news.allNews);

  useEffect(() => {
    dispatch(getAllNewsAsync({ page: currentPage }));
  }, [currentPage, lang]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="news">
      <div className="container">
        <h1 className="news__title">{t("news")}</h1>

        {loading ? (
          <div className="loader-container">
            <ClipLoader color="#e7c175" size={80} />
          </div>
        ) : allNewsData.length > 0 ? (
          <div className="news-grid">
            {allNewsData.map((item) => (
              <div className="card" key={item.id}>
                <div className="img-box">
                  <img src={IMAGES_URL + item.cover_image} alt="img" />
                </div>
                <div className="info">
                  <h3 className="info__title ellipse">{item.title}</h3>
                  <p className="info__text">{item.description}</p>
                  <p className="info__date">{item.created_at}</p>
                  <div className="info__line"></div>
                </div>
                <Link className="news-link" to={`${item.id}`} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data">
            <Empty description={common[lang].not_found} />
          </div>
        )}

        <div className="pagination">
          {currentPage > 1 && (
            <Pagination
              current={currentPage}
              total={total}
              pageSize={per_page}
              onChange={handlePageChange}
              showSizeChanger={false}
              showLessItems
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
