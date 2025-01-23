import { getBlogs, getSingleBlog } from "@/api/services/blogs";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: {
    data: [],
    loading: false,
    per_page: 1,
    error: null,
    total: 0,
  },
  singleBlogs: {
    loading: false,
    data: [],
    status: null,
  },
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, { payload }) => {
      state.blogs = { ...state.blogs, ...payload };
    },
    setSingleBlogs: (state, { payload }) => {
      state.singleBlogs = { ...state.singleBlogs, ...payload };
    },
  },
});

export const getBlogsAsync = (params) => async (dispatch) => {
  try {
    dispatch(setBlogs({ loading: true }));
    const response = await getBlogs(params);
    if (response) {
      console.log(response);
      dispatch(
        setBlogs({
          data: response.data.data,
          total: response.data.total,
          per_page: response.data.per_page,
        })
      );
    }
  } catch (error) {
    dispatch(setBlogs({ error: true }));
    console.log(error);
  } finally {
    dispatch(setBlogs({ loading: false }));
  }
};

export const getSingleBlogsAsync = (id) => async (dispatch) => {
  try {
    dispatch(setSingleBlogs({ loading: true }));
    const response = await getSingleBlog(id);
    if (response) {
      dispatch(
        setSingleBlogs({
          data: response.data,
          totalCount: response.data.total,
        })
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(
      setSingleBlogs({
        status: error.status,
      })
    );
  } finally {
    dispatch(setSingleBlogs({ loading: false }));
  }
};

export const { setBlogs, setSingleBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
