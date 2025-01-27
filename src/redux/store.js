import { configureStore } from "@reduxjs/toolkit";
import newsAllReducer from "./newsAll/newsAllSlice";
import blogsReducer from "./blogs/blogsSlice";
import commonReducer from "./common/commonSlice";
import searchReducer from "./search/searchSlice";

const store = configureStore({
  reducer: {
    news: newsAllReducer,
    blogs: blogsReducer,
    common: commonReducer,
    search: searchReducer,
  },
});

export default store;
