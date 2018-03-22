import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'production') {
  composeEnhancers = compose;
}

// Combine Reducers
const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  auth: authReducer
});

// STORE CREATION & Export
export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};