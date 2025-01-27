import { axiosInstance } from "../api";

const getCommonSearch = (params) => {
  return axiosInstance.get("common/search", { params });
};

export { getCommonSearch };
