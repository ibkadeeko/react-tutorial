import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({ count }) => ({
  type: 'SET',
  count,
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        count: state.count + action.incrementBy,
      };
    }
    case 'DECREMENT': {
      return {
        count: state.count - action.decrementBy,
      };
    }
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

const value = {
  incrementBy: 8,
  decrementBy: 3,
};

store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch(resetCount());

store.dispatch(decrementCount(value));

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(incrementCount(value));

store.dispatch({
  type: 'SET',
  count: 120,
});

store.dispatch(setCount({ count: 5 }));
