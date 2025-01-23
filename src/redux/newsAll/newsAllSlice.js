import { createSlice } from "@reduxjs/toolkit";
import {
  getAllNews,
  getLastNews,
  getSingleNews,
} from "../../api/services/news";

const initialState = {
  allNews: {
    data: [],
    loading: false,
    per_page: 1,
    error: null,
    total: 0,
  },
  lastNews: {
    data: [],
    loading: false,
  },
  singleNews: {
    loading: false,
    data: [],
    status: null,
  },
};

const allNewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setAllNews: (state, { payload }) => {
      state.allNews = { ...state.allNews, ...payload };
    },
    setSingleNews: (state, { payload }) => {
      state.singleNews = { ...state.singleNews, ...payload };
    },
    setLastNews: (state, { payload }) => {
      state.lastNews = { ...state.lastNews, ...payload };
    },
  },
});

export const getAllNewsAsync = (params) => async (dispatch) => {
  try {
    dispatch(setAllNews({ loading: true }));
    const response = await getAllNews(params);
    if (response) {
      console.log(response);
      dispatch(
        setAllNews({
          data: response.data.data,
          total: response.data.total,
          per_page: response.data.per_page,
        })
      );
    }
  } catch (error) {
    dispatch(setAllNews({ error: true }));
    console.log(error);
  } finally {
    dispatch(setAllNews({ loading: false }));
  }
};

export const getSingleNewsAsync = (id) => async (dispatch) => {
  try {
    dispatch(setSingleNews({ loading: true }));
    const response = await getSingleNews(id);
    if (response) {
      dispatch(
        setSingleNews({
          data: response.data,
          totalCount: response.data.total,
        })
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(
      setSingleNews({
        status: error.status,
      })
    );
  } finally {
    dispatch(setSingleNews({ loading: false }));
  }
};

export const getLastNewsAsync = () => async (dispatch) => {
  try {
    dispatch(setLastNews({ loading: true }));
    const response = await getLastNews();

    if (response) {
      dispatch(
        setLastNews({
          data: response.data,
          loading: false,
        })
      );
    }
  } catch (error) {
    dispatch(setLastNews({ loading: false }));
    console.log(error);
  } finally {
    dispatch(setAllNews({ loading: false }));
  }
};

export const { setAllNews, setSingleNews, setLastNews } = allNewsSlice.actions;

export default allNewsSlice.reducer;
