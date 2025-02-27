import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oemData: [],
  isLoading: false,
  isError: false,
};

const oemSlice = createSlice({
  name: "oem",
  initialState,
  reducers: {
    fetchOemStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    fetchOemSuccess: (state, action) => {
      state.isLoading = false;
      state.oemData = action.payload;
    },
    fetchOemFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { fetchOemStart, fetchOemSuccess, fetchOemFailure } = oemSlice.actions;
export default oemSlice.reducer;
