import "./index.scss";

const OrderButton = ({ onOrder, disabled }) => {
  return (
    <button disabled={disabled} onClick={onOrder} className="order-button">
      Заказать
    </button>
  );
};

export default OrderButton;
