import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from '../../service/connection';
import { currentTickers } from "../../redux/tickerSlice";
import TickerItem from '../TickerItem/TickerItem';

import { Table, Head, Row, HeadTitle } from './TickersList.styled';

const TickersList = () => {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers);
  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (quote) => {
      dispatch(currentTickers(quote));
    });
  }, [dispatch]);

  return (
    <div>
      <Table>
        <Head>
      <Row>
        <HeadTitle>Ticker</HeadTitle>
        <HeadTitle>Price</HeadTitle>
        <HeadTitle>Change</HeadTitle>
        <HeadTitle>Persentage</HeadTitle>
        <HeadTitle>Dividend</HeadTitle>
        <HeadTitle>Yield</HeadTitle>
        <HeadTitle>Last traded</HeadTitle>
      </Row>
      </Head>
      <tbody> 
        {tickers.map((tickerItem) => (
          <TickerItem key={tickerItem.ticker} tickerItem={tickerItem} />
          ))
        }  
     </tbody> 
      </Table>
      </div>
  
  );
};

export default TickersList;
