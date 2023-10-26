import { useRef, useEffect } from 'react';
import { Row, Cell } from './TickerItem.styled';


const TickerItem = ({ tickerItem }) => {

  const {
    ticker,
    price,
    change,
    change_percent,
    dividend,
    yield: profit,
    last_trade_time,
  } = tickerItem;

  const prevChange = useRef(change_percent);
  const changeColor = prevChange.current > change_percent ? '#A50E0E' : '#137333';
  const backgroundColor = prevChange.current > change_percent ? '#FCE8E6' : '#E6F4EA';

  const arrowIcon = prevChange.current > change_percent ? '↓' : '↑';
  
  useEffect(() => {
    prevChange.current = change_percent;
  }, [change_percent]);


  const formattedDate =  new Date(last_trade_time).toLocaleDateString('dsb-DE', { day:"numeric", month:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"})
  
  return (
    <Row>
      <Cell>{ticker}</Cell>
      <Cell>{price}</Cell>
      <Cell>{change}</Cell>
      <Cell style={{color: changeColor, backgroundColor: backgroundColor}}>{arrowIcon} {change_percent} %</Cell> 
      <Cell>{dividend}</Cell> 
      <Cell>{profit}</Cell> 
      <Cell>{formattedDate}</Cell> 
  </Row>
  );
};

export default TickerItem;




