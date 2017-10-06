import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  payload: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  payload: decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  payload: count
});

const resetCount = () => ({
  type: 'RESET',
  payload: 0
});

const reducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload
      };

    case 'DECREMENT':
      return {
        count: state.count - action.payload
      };

    case 'SET':
      return {
        count: action.payload
      }


    case 'RESET':
      return {
        count: action.payload
      };

    default:
      return state;
  }
};

const store = createStore(reducers);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('increment');
store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(incrementCount());

console.log('reset');
store.dispatch(resetCount());

console.log('decrement');
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

console.log('set');
store.dispatch(setCount({ count: 123 }));
