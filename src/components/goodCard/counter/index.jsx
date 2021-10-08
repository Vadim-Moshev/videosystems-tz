import "./index.scss";

const Counter = ({ initialValue = 0, onDecrement, onIncrement }) => {
  return (
    <div className="counter">
      <button onClick={onDecrement} className="counter__dec">
        -
      </button>
      <span className="counter__indicator">{initialValue}</span>
      <button onClick={onIncrement} className="counter__inc">
        +
      </button>
    </div>
  );
};

export default Counter;
