// state - count: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require('redux');

// 1. state
const initialState = {
  count: 0,
  users: ['Sabbir'],
};

// 2. action
const incrementCounterAction = () => {
  return {
    type: 'INCREMENT',
  };
};
const decrementCounterAction = () => {
  return {
    type: 'DECREMENT',
  };
};
const resetCounterAction = () => {
  return {
    type: 'RESET',
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: 'INCREMENT_BY_VALUE',
    payload: value,
  };
};

const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user,
  };
};

// 3. reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };
    case 'INCREMENT_BY_VALUE':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'ADD_USER':
      return {
        users: [...state.users, action.payload],
      };
    default:
      state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());

store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));

store.dispatch(addUser('Mahfuza'));
