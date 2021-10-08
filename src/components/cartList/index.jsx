import GoodInCart from "../goodInCart";

const CartList = ({ goodsList }) => {
  if (goodsList.length === 0) {
    return <p>Ваша корзина пуста...</p>;
  }

  const goodInCartItems = goodsList.map((good) => {
    return <GoodInCart key={good.id} goodProps={good} />;
  });

  return <div>{goodInCartItems}</div>;
};

export default CartList;
