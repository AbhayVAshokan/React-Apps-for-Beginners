import CounterHook from './CounterHook';
import './Counter.css';

const Counter = () => {
    const { count, increment, decrement } = CounterHook();

    return (
        <div className="counter-wrapper">
            <button className="btn btn-success counter-btn" onClick={increment}>Increment</button>
            <button className="btn btn-danger counter-btn" onClick={decrement}>Decrement</button>
            <p className="counter-number">{count}</p>
        </div>
    );
}

export default Counter;