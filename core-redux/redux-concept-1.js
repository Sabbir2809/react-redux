// Initial State, Dispatch Action, Action Type based Reducers, Update Store(getState(), dispatch(), subscribe())

const { createStore } = require('redux');

// Defining Constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 1. State
const initialCounterState = {
  count: 0,
};

// 2. Action (object) - type, payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// 3. Reducer (pure function)
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      state;
  }
};

// Create Store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
