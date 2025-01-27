import { createSlice } from "@reduxjs/toolkit";
import { getCommonSearch } from "../../api/services/search";

const initialState = {
  allCommonSearch: {
    data: [],
    loading: false,
    numOfPages: 1,
    total: 0,
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCommonSearch: (state, { payload }) => {
      state.allCommonSearch = { ...state.allCommonSearch, ...payload };
    },
  },
});

export const getCommonSearchAsync = (params) => async (dispatch) => {
  try {
    dispatch(setCommonSearch({ loading: true }));
    const response = await getCommonSearch(params);
    if (response) {
      dispatch(
        setCommonSearch({
          data: response.data.data.data,
          numOfPages: response.data.data.last_page,
          total: response.data.data.total,
        })
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setCommonSearch({ loading: false }));
  }
};

export const { setCommonSearch } = searchSlice.actions;
export default searchSlice.reducer;
