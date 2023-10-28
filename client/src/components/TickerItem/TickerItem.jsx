import { useRef, useEffect } from 'react';
import { Row, Text } from './TickerItem.styled';
import ToggleButton from '../ToggleButton/ToggleButton';

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
    <Row key={ticker}>
      <td><Text>{ticker}</Text></td>
      <td><Text>{price} $</Text></td>
      <td><Text>{change}</Text></td>
      <td style={{backgroundColor: backgroundColor}}><Text style={{color: changeColor}}>{arrowIcon} {change_percent} %</Text></td>
      <td><Text>{dividend}</Text></td>
      <td><Text>{profit}</Text></td>
      <td><Text>{formattedDate}</Text></td>
      <td>
        <ToggleButton />
      </td>
  </Row>
  );
};

export default TickerItem;




