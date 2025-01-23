import axios from "axios";

const IMAGES_URL = "https://backend.legitsa.az/";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.lang = localStorage.getItem("lang") || "az";

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return {
      data: res.data,
      status: res.status,
    };
  },
  (err) => {
    if (err.response) {
      return Promise.reject({
        data: err.response.data,
        status: err.response.status,
      });
    }
    return Promise.reject(err);
  }
);

export { axiosInstance, IMAGES_URL };
