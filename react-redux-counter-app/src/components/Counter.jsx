import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default Counter;

// 1. State -> count: 0
// 2. actions -> increment, decrement, reset
// 3. reducers -> increment: count => count + 1
// 3. reducers -> decrement: count => count - 1
// 3. reducers -> reset: count => 0
// 4. store
// 5. providing store in react
// 6. update store
