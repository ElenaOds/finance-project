import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from '../../service/connection';
import {
  getTickers,
  getTickersRequested,
  getTickersError,
} from "../../redux/actions";
import { tickersData } from "../../redux/reducer";
import TickerItem from '../TickerItem/TickerItem';

const TickersList = () => {
  const dispatch = useDispatch();
  const { currentTickers } = useSelector(tickersData);

  useEffect(() => {
    dispatch(getTickersRequested());
    socket.emit("start");
    socket.on("ticker", (quotes) => dispatch(getTickers(quotes)));
    socket.on("connect_error", function () {
      dispatch(getTickersError());
    });
    return () => {
      socket.on('disconnect')
    };
  }, [dispatch]);
  return (
    < >
    
    <div>
        {currentTickers.map((tickerItem) => (
      <TickerItem key={tickerItem.ticker} tickerItem={tickerItem} />
  ))
        }
      </div>
    </>
  );
};

export default TickersList;
