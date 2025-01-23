import { configureStore } from "@reduxjs/toolkit";
import newsAllReducer from "./newsAll/newsAllSlice";
import blogsReducer from "./blogs/blogsSlice";

const store = configureStore({
  reducer: {
    news: newsAllReducer,
    blogs: blogsReducer,
  },
});

export default store;
