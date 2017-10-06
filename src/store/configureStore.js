import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Combine Reducers
const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

// STORE CREATION & Export
export default () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};