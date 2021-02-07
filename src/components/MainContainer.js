import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import Stock from "./Stock";

function MainContainer({ stocks }) {
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [displayStocks, setDisplayStocks] = useState([]);

  const buyStock = (boughtStock) => {
    setPortfolioStocks([...portfolioStocks, boughtStock]);
  };

  const alphaSort = () => {
    const alphaStocks = [...stocks].sort((a, b) => (a.name > b.name ? 1 : -1));
    setDisplayStocks(alphaStocks);
  };

  const priceSort = () => {
    const priceStocks = [...stocks].sort((a, b) => (a.price > b.price ? 1 : -1));
    setDisplayStocks(priceStocks);
  };

  const filter = (chosenType) => {
    const filteredStocks = stocks.filter((stock) => stock.type === chosenType);
    setDisplayStocks(filteredStocks);
    console.log(filteredStocks);
  };

  return (
    <div>
      <SearchBar
        onAlphaSort={alphaSort}
        onPriceSort={priceSort}
        onFilter={filter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayStocks.length > 0 ? displayStocks : stocks} onBuyStock={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioStocks={portfolioStocks}
            stocks={stocks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
