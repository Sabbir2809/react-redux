import { DECREMENT, INCREMENT, RESET } from '../constants/counterConstant';

// 1. state
const initialCounter = {
  count: 0,
  users: ['Sabbir'],
};

// 3. reducers
const counterReducer = (state = initialCounter, action) => {
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

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
