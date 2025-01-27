import React, { useEffect, useState } from "react";
import SearchIco from "../../assets/icons/search/search.svg";
import SearchCard from "../../components/SearchCard/SearchCard";
import TextField from "@mui/material/TextField";
import common from "@/locale/common.json";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCommonSearchAsync } from "@/redux/search/searchSlice";
import "./search.scss";
import Sceleton from "@/components/Skeleton";
import { ClipLoader } from "react-spinners";

const Search = () => {
  const dispatch = useDispatch();
  const commonSearch = useSelector(
    (store) => store.search.allCommonSearch.data
  );
  const lang = useSelector((store) => store.common.lang);
  const { loading } = useSelector((store) => store.search.allCommonSearch);
  // const { numOfPages } = useSelector((store) => store.search.allCommonSearch);
  const { total } = useSelector((store) => store.search.allCommonSearch);
  const [searchText, setSearchText] = useState("");
  const [dateOpen, setDateOpen] = useState(false);
  const [isInitialState, setIsInitialState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [submit, setIsSubmit] = useState(false);

  console.log(searchText);

  const onSubmit = (e) => {
    e.preventDefault();
    searchHandler();
  };

  //collect all parameters and check send with params to searchAsync
  const searchHandler = (optionalPage) => {
    let params = {};

    window.scrollTo(0, 0);

    if (searchText) {
      params.title = searchText;
    }

    dispatch(
      getCommonSearchAsync({
        ...params,
        page: optionalPage ? optionalPage : 1,
      })
    );

    if (!optionalPage) {
      setCurrentPage(1);
    }

    setIsSubmit(true);
  };

  //change page - with pagination get data due to current page
  useEffect(() => {
    if (isInitialState) setIsInitialState(false);
    else searchHandler(currentPage);
  }, [currentPage]);

  return (
    <section className="search">
      <div className="container">
        <div className="content-container">
          <form className="filter-fields" onSubmit={onSubmit}>
            <div className="input-row filter-row" action="#">
              <TextField
                id="outlined-basic"
                label={
                  common[lang].searchTerm.title || header["az"].searchTerm.title
                }
                variant="outlined"
                className="poster-inp"
                value={searchText || ""}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <img className="btn" src={SearchIco} alt="" />
            </div>

            <div className="filter-button filter-row">
              <button type="submit">
                <p className="f-search">
                  {common[lang].search.title || header["az"].search.title}
                </p>
              </button>
            </div>
          </form>

          <div className="search-result">
            <h3 className="search-result__count">
              {total != 0 &&
                `${common[lang].searchTitle.title} ${total} ${
                  common[lang].searchResult.title ||
                  header["az"].searchResult.title
                }`}
            </h3>

            {loading ? (
              <div className="loader-container">
                <ClipLoader color="#e7c175" size={80} />
              </div>
            ) : commonSearch?.length > 0 ? (
              <div className="events-wrapper">
                {commonSearch?.map((item, index) => {
                  return <SearchCard key={index} item={item} />;
                })}
              </div>
            ) : (
              submit && (
                <div className="not-result">
                  <p>{common[lang].notFound.title}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div
        role="button"
        onClick={() => setDateOpen(false)}
        className={`overlay-history ${dateOpen ? "history-active" : ""} `}
      ></div>
    </section>
  );
};

export default Search;
