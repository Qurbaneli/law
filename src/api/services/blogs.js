import { axiosInstance } from "../api";

const getBlogs = (params) => {
  return axiosInstance.get("/blogs", { params });
};

const getSingleBlog = (id) => {
  return axiosInstance.get(`/blogs/detail/${id}`);
};

export { getBlogs, getSingleBlog };
