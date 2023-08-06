const { createStore, combineReducers } = require('redux');

// Define Constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_CART = 'GET_CART';
const ADD_CART = 'ADD_CART';

// State
const initialProductState = {
  products: ['T-Shirt', 'Pants'],
  numberOfProducts: 2,
};
const initialCartState = {
  carts: ['T-Shirt'],
  numberOfCarts: 1,
};

// Action
const getProductAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const getCartAction = () => {
  return {
    type: GET_CART,
  };
};
const addCartAction = (item) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};

// Reducer
const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

const cartsReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        carts: [...state.carts, action.payload],
        numberOfCarts: state.numberOfCarts + 1,
      };

    default:
      return state;
  }
};

// combineReducer
const rootReducer = combineReducers({
  productsR: productsReducer,
  cartsR: cartsReducer,
});

// createStore
const store = createStore(rootReducer);

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(getProductAction());
store.dispatch(addProductAction('Watch'));

store.dispatch(getCartAction());
store.dispatch(addCartAction('Watch'));
