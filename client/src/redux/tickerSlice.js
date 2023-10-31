import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTickers: [],
}

const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    setCurrentTickers: (state, action) => {
      state.currentTickers = action.payload;
    },

  },
});

export const { setCurrentTickers, addToFavoriteTickers, removeFromFavoriteTickers, setFavoriteTickers } = tickerSlice.actions;
export default tickerSlice.reducer;


