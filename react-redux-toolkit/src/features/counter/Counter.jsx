import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Counter App</h2>
      <div className='card p-3'>
        <div className='card-header'>
          <h2 className='text-success'>Count: {count}</h2>
        </div>
        <div className='card-body'>
          <button onClick={handleIncrement} className='btn btn-success mx-2'>
            Increment
          </button>
          <button onClick={handleDecrement} className='btn btn-warning mx-2'>
            Decrement
          </button>
          <button onClick={() => dispatch(reset())} className='btn btn-danger mx-2'>
            Reset
          </button>
          <button onClick={() => dispatch(incrementByValue(5))} className='btn btn-secondary mx-2'>
            Increment By Value
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
