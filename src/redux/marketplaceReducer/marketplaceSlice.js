import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marketData: [],
  isLoading: false,
  isError: false,
};

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    fetchMarketStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    fetchMarketSuccess: (state, action) => {
      state.isLoading = false;
      state.marketData = action.payload;
    },
    fetchMarketFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    addNewDeal: (state, action) => {
      state.marketData = [...state.marketData, action.payload];
    },
  },
});

export const {
  fetchMarketStart,
  fetchMarketSuccess,
  fetchMarketFailure,
  addNewDeal,
} = marketplaceSlice.actions;

export default marketplaceSlice.reducer;
