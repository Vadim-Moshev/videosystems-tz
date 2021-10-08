import Counter from "./counter";
import { inject, observer } from "mobx-react";

import "./index.scss";

const GoodCart = inject("ShopStore")(
  observer(({ className, goodProps, ShopStore }) => {
    const { decreaseGoodsById, increaseGoodsById } = ShopStore;
    const countInCart = goodProps.countInCart;
    const goodCardModifierClass = countInCart > 0 ? "green-border" : "";

    return (
      <div className={`good-card ${className} ${goodCardModifierClass}`}>
        <img className="good-card__picture" src={goodProps.img} alt="" />
        <p className="good-card__name">{goodProps.name}</p>
        <p className="good-card__description">{goodProps.description}</p>
        <p className="good-card__price">Цена: {goodProps.price.toFixed(2)}</p>
        <Counter
          onDecrement={() => {
            decreaseGoodsById(goodProps.id);
          }}
          onIncrement={() => {
            increaseGoodsById(goodProps.id);
          }}
          initialValue={goodProps.countInCart}
        />
      </div>
    );
  })
);

// const GoodCart = ({ className, goodProps }) => {
//   return (
//     <div className={`good-card ${className}`}>
//       <div className="good-card__picture"></div>
//       <p className="good-card__name">{goodProps.name}</p>
//       <p className="good-card__description">{goodProps.description}</p>
//       <Counter initialValue={goodProps.countInCart} />
//     </div>
//   );
// };

export default GoodCart;
