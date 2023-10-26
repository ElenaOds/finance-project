import { createSlice } from "@reduxjs/toolkit";


const tickerSlice = createSlice({
  name: "ticker",
  initialState: [],
  reducers: {
    currentTickers: (state, action) => {
      return state = action.payload;
    },
  },
});

export const { currentTickers } = tickerSlice.actions;
export default tickerSlice.reducer;
