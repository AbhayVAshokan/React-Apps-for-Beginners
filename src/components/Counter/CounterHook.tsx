import { useState } from 'react';

interface CounterHookInterface {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const CounterHook: () => CounterHookInterface = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return { count, increment, decrement };
}

export default CounterHook;