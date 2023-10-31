// import { render, screen } from '@testing-library/react';
import tickerSlice, { setCurrentTickers }  from './tickerSlice';

describe('tickerSlice', () => {
    it('should set the current tickers correctly', () => {
      const initialState = {
        currentTickers: [],
      };
      const tickers = ['AAPL', 'TSLA'];
      const action = setCurrentTickers(tickers);
      const state = tickerSlice(initialState, action);
      expect(state.currentTickers).toEqual(tickers);
    });
  });