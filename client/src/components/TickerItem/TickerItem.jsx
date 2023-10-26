// import { useState } from "react";
import { Row, Cell } from '../TickersList/TickersList.styled';

const TickerItem = ({ tickerItem }) => {
  // const [value, setValue] = useState();
  

  const {
    ticker,
    price,
    change,
    change_percent,
    dividend,
    yield: profit,
    last_trade_time,
  } = tickerItem;

  const formattedDate =  new Date(last_trade_time).toLocaleDateString('dsb-DE', { day:"numeric", month:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"})
  
  return (
    <Row>
      <Cell>{ticker}</Cell>
      <Cell>{price}</Cell> 
      <Cell>{change}</Cell> 
      <Cell>{change_percent}</Cell> 
      <Cell>{dividend}</Cell> 
      <Cell>{profit}</Cell> 
      <Cell>{formattedDate}</Cell> 
  </Row>

  
  );
};

export default TickerItem;




