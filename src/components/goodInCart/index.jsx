import "./index.scss";

const GoodInCart = ({ goodProps }) => {
  const goodCount =
    goodProps.countInCart > 1 ? (
      <span className="good-in-cart__count">
        {` (${goodProps.countInCart} шт.)`}
      </span>
    ) : null;

  return (
    <p className="good-in-cart">
      <span className="good-in-cart__name">{goodProps.name}</span>
      {goodCount}
    </p>
  );
};

export default GoodInCart;
