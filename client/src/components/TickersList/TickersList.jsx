import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {socket} from '../../service/connection';
import { setCurrentTickers } from "../../redux/tickerSlice";
import TickerItem from '../TickerItem/TickerItem';

import { Table, Head, Row, HeadTitle } from './TickersList.styled';

const TickersList = () => {
  const dispatch = useDispatch();
  const currentTickers = useSelector((state) => state.tickers.currentTickers);

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (quote) => {
      dispatch(setCurrentTickers(quote));
    });

    return () => {
      socket.on("disconnect");
    }
  }, [dispatch]);


  return (

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
        {currentTickers.map((tickerItem) => (
          <TickerItem key={tickerItem.ticker} tickerItem={tickerItem}/>
        ))
        }
     </tbody> 
      </Table>
  );
};

export default TickersList;
