import React, { useState }from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks }) {
  const portfolioCards = portfolioStocks.map((portfolioStock) => {
    return <Stock key={portfolioStock.name} name={portfolioStock.name} ticker={portfolioStock.ticker} price={portfolioStock.price}/>
  })


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioCards}
    </div>
  );
}

export default PortfolioContainer;
