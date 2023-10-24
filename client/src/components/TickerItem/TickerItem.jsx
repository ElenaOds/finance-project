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
  

  return (
<ul>
 <li>{ticker}</li>
<li>{price}</li> 
<li>{change}</li> 
<li>{change_percent}</li> 
<li>{dividend}</li> 
<li>{profit}</li> 
<li>{price}</li> 
<li>{price}</li> 
<li>{last_trade_time}</li> 
</ul> 
  
  );
};

export default TickerItem;




