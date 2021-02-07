import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStock }) {
  const stockCards = stocks.map((stock) => {
    return <Stock onBuyStock={onBuyStock} key={stock.id} name={stock.name} ticker={stock.ticker} price={stock.price}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;
