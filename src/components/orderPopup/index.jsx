import "./index.scss";

const OrderPopup = ({
  goodsInCart,
  visible,
  onCompleteOrder,
  onCancelOrder,
}) => {
  const visibilityModifier = visible ? "" : "hidden";

  const totalSum = goodsInCart.reduce((acc, curr) => {
    return acc + curr.countInCart * curr.price;
  }, 0);

  const onWrapperClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div onClick={onCancelOrder} className={`overlay ${visibilityModifier} `}>
      <div onClick={onWrapperClick} className="order-popup__wrapper">
        <p className="order-popup__total-sum">
          Сумма Вашего заказа составляет {totalSum.toFixed(2)} руб.
        </p>
        <div className="order-popup__buttons">
          <button onClick={onCompleteOrder} className="order-popup__button">
            Оформить заказ
          </button>
          <button onClick={onCancelOrder} className="order-popup__button">
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
