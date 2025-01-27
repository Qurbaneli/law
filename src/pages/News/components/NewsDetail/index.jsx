import { useEffect } from "react";
import "./newsdetail.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getLastNewsAsync,
  getSingleNewsAsync,
  setSingleNews,
} from "@/redux/newsAll/newsAllSlice";
import { IMAGES_URL } from "@/api/api";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const NewsDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleNews = useSelector((state) => state.news.singleNews?.data);
  const lastNews = useSelector((store) => store.news.lastNews.data);
  const lang = useSelector((store) => store.common.lang);
  const { status } = useSelector((state) => state.news.singleNews);
  const { loading } = useSelector((state) => state.news.singleNews);
  const { id } = useParams();

  console.log(status);

  useEffect(() => {
    dispatch(getSingleNewsAsync(id));
    dispatch(getLastNewsAsync());

    return () => {
      dispatch(setSingleNews({ data: [] }));
    };
  }, [id, lang]);

  useEffect(() => {
    if (status === 404) {
      navigate(`/news`);
    }

    return () => {
      dispatch(setSingleNews({ status: null }));
    };
  }, [status]);

  return (
    singleNews && (
      <section className="news-detail">
        <div className="container">
          <div className={loading ? "row loading" : "row"}>
            <div className="left-side">
              <div className="detail-cont">
                <h1 className="cap">{singleNews?.title}</h1>
                <div className="date">
                  <p className="time">{singleNews?.created_at}</p>
                </div>
              </div>
              <div className="images">
                <div className="main-img">
                  <img
                    src={IMAGES_URL + singleNews?.cover_image}
                    alt="news-detail"
                  />
                </div>

                {singleNews?.news_images?.length > 0 && (
                  <div className="related-images">
                    {singleNews?.news_images?.slice(0, 3).map((item, index) => (
                      <div key={item.id} className="box-img">
                        <img
                          src={`${IMAGES_URL}${item.image}`}
                          alt="related-images"
                        />
                        {index === 2 && (
                          <p>
                            {singleNews?.news_images.length >= 3
                              ? `${singleNews?.news_images.length}+`
                              : ""}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="detail-about">
                <p style={{}} className="detail-info">
                  {singleNews?.short_description}
                </p>

                <div className="detail-text">{singleNews?.description}</div>
              </div>
            </div>
            <div className="right-side">
              <div className="last-news">
                <SectionTitle title="Son xəbərlər" />

                <div className="last-news__flex">
                  {lastNews?.map((item) => {
                    return (
                      <div key={item?.id} className="right-news-item">
                        <img src={`${IMAGES_URL}${item.cover_image}`} alt="" />
                        <p className="right-news-detail">
                          {item?.title?.length <= 65
                            ? item?.title
                            : `${item?.title.slice(0, 70)}...`}
                        </p>
                        <Link to={`/news/${item.id}`} className="news-link" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default NewsDetail;
