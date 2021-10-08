import GoodCard from "../goodCard";

import "./index.scss";

const GoodsCardsList = ({ goodsList }) => {
  const goodCartItems = goodsList.map((good) => {
    return (
      <GoodCard
        goodProps={good}
        key={good.id}
        className="goods-cards-list__item"
      />
    );
  });

  return <div className="goods-cards-list">{goodCartItems}</div>;
};

export default GoodsCardsList;
