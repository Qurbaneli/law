import React from "react";
import "./search-card.scss";
import clockSvg from "../../assets/icons/events/clock.svg";
import { IMAGES_URL } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import arrowRight from "../../assets/icons/events/arrow-right.svg";
import hero from "@/locale/hero.json";
import { useSelector } from "react-redux";
const SearchCard = ({ item }) => {
  const lang = useSelector((store) => store.common.lang);

  const generateLink = (type) => {
    switch (type) {
      case "blogs":
        return `/blogs`;
      case "news":
        return `/news`;
      default:
        return `/`;
    }
  };
  const navigate = useNavigate();
  return (
    <div className="event-box">
      <div className="img-box">
        <Link to={`${generateLink(item?.type)}/${item?.id}`}>
          <img src={IMAGES_URL + item.cover_image} alt="event-img" />
        </Link>
      </div>
      <div className="event-info">
        <p className="event-info__title">
          <Link to={`${generateLink(item?.type)}/${item?.id}`}>
            {item?.title?.length < 70
              ? item?.title
              : `${item?.title?.slice(0, 81)}...`}
          </Link>
        </p>
        <div className="view-container">
          <div className="view d-flex">
            <img className="d-ico" src={clockSvg} alt="clock" />
            <p className="event-info__date">{item?.created_at}</p>
          </div>
        </div>
        {item?.description !== null && (
          <p className="event-info__text">
            {item?.description && item?.description?.slice(0, 160).trim()}...
          </p>
        )}

        <div className="more-area">
          <Link
            className="event-info__btn"
            to={`${generateLink(item?.type)}/${item?.id}`}
          >
            <p className="read-event">{hero[lang].more.title}</p>
            <img className="more-arrow" src={arrowRight} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
