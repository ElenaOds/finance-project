const initialState = {
  currentTickers: [],
  previousTickers: [],
  loading: false,
  error: false,
};

const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TICKERS_REQUESTED": {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case "GET_TICKERS_ACTUAL": {
      return {
        ...state,
        currentTickers: action.payload,
        loading: false,
        error: false,
      };
    }

    case "GET_TICKERS_PREVIOUS": {
      return {
        ...state,
        previousTickers: action.payload,
        loading: false,
        error: false,
      };
    }

    case "GET_TICKERS_ERROR": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};

export const tickersData = (state) => state.tickers;

export default tickersReducer;
