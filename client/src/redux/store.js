import { configureStore } from "@reduxjs/toolkit";
import tickersReducer from "./tickerSlice";


const store = configureStore({
  reducer: {
    tickers: tickersReducer,
    
  },
});

export default store;