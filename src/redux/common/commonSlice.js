import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("lang") || "az",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const { setLang } = commonSlice.actions;

export default commonSlice.reducer;
