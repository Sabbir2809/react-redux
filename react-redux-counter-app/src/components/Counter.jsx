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
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='text-success'>Count: {count}</h1>
        </div>
        <div className='card-body'>
          <button onClick={handleIncrement} className='btn btn-primary '>
            Increment
          </button>
          <button onClick={handleDecrement} className='btn btn-warning mx-2'>
            Decrement
          </button>
          <button onClick={() => dispatch(resetCounter())} className='btn btn-danger'>
            Reset
          </button>
        </div>
      </div>
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
