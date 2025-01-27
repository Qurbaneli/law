import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLastNewsAsync } from "@/redux/newsAll/newsAllSlice";
import { IMAGES_URL } from "@/api/api";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { getSingleBlogsAsync, setSingleBlogs } from "@/redux/blogs/blogsSlice";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const singleBlog = useSelector((state) => state.blogs.singleBlog?.data);
  const lastNews = useSelector((store) => store.news.lastNews.data);
  const { loading } = useSelector((state) => state.blogs.singleBlog);
  const { status } = useSelector((state) => state.blogs.singleBlog);
  const lang = useSelector((store) => store.common.lang);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleBlogsAsync(id));
    dispatch(getLastNewsAsync());
    return () => {
      dispatch(setSingleBlogs({ data: [] }));
    };
  }, [id, lang]);

  useEffect(() => {
    if (status === 404) {
      navigate(`/blogs.`);
    }

    return () => {
      dispatch(setSingleBlogs({ status: null }));
    };
  }, [status]);

  console.log(lastNews);

  return (
    singleBlog && (
      <section className="news-detail">
        <div className="container">
          <div className={loading ? "row loading" : "row"}>
            <div className="left-side">
              <div className="detail-cont">
                <h1 className="cap">{singleBlog?.title}</h1>
                <div className="date">
                  <p className="time">{singleBlog?.created_at}</p>
                </div>
              </div>
              <div className="images">
                <div className="main-img">
                  <img
                    src={IMAGES_URL + singleBlog?.cover_image}
                    alt="news-detail"
                  />
                </div>

                {singleBlog?.news_images?.length > 0 && (
                  <div className="related-images">
                    {singleBlog?.news_images?.slice(0, 3).map((item, index) => (
                      <div key={item.id} className="box-img">
                        <img
                          src={`${IMAGES_URL}${item.image}`}
                          alt="related-images"
                        />
                        {index === 2 && (
                          <p>
                            {singleBlog?.news_images.length >= 3
                              ? `${singleBlog?.news_images.length}+`
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
                  {singleBlog?.short_description}
                </p>

                <div className="detail-text">{singleBlog?.description}</div>
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

export default BlogDetail;
