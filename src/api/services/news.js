import { axiosInstance } from "../api";

const getAllNews = (params) => {
  return axiosInstance.get("/news", { params });
};

const getSingleNews = (id) => {
  return axiosInstance.get(`/news/detail/${id}`);
};

const getLastNews = () => {
  return axiosInstance.get("/last-news");
};

export { getSingleNews, getAllNews, getLastNews };
