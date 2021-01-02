import CounterHook from './CounterHook';
import './Counter.css';

interface CounterHookInterface {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const Counter: React.FunctionComponent<{}> = () => {
  const { count, increment, decrement }: CounterHookInterface = CounterHook();

  return (
    <div className="counter-wrapper">
      <button className="btn btn-success counter-btn" onClick={increment}>Increment</button>
      <button className="btn btn-danger counter-btn" onClick={decrement}>Decrement</button>
      <p className="counter-number">{count}</p>
    </div>
  );
}

export default Counter;