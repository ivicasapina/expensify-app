import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY
// SET_START_DATE
// SET_END_DATE
const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
const SORT_BY = 'SORT_BY';
const SET_START_DATE = 'SET_START_DATE';
const SET_END_DATE = 'SET_END_DATE';

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
    } = {}
) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];

    case REMOVE_EXPENSE:
      return state.filter((expense) => expense.id !== action.id);

    case EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        else {
          return expense;
        }
      });

    default:
      return state;
  }
};

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: SORT_BY,
  sortBy: 'amount'
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: SORT_BY,
  sortBy: 'date'
});

// SORT_START_DATE
const sortStartDate = (startDate) => ({
  type: SET_START_DATE,
  startDate
});

// SORT_END_DATE
const sortEndDate = (endDate) => ({
  type: SET_END_DATE,
  endDate
});

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };

    case SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy
      };

    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };

    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    const desc = expense.description.toLowerCase();
    const filterText = text.toLowerCase();
    const textMatch = desc.indexOf(filterText) !== -1;

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }

    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Combine Reducers
const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

// STORE CREATION
const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

console.log('Create expense');
const expense1 = store.dispatch(addExpense({ description: 'first expense', note: 'note about expense', amount: 201, createdAt: 201 }));
const expense2 = store.dispatch(addExpense({ description: 'second expense', note: 'note about expense 2', amount: 200, createdAt: 501 }));
const expense3 = store.dispatch(addExpense({ description: 'third expense', note: 'note about expense 3', amount: 300, createdAt: 500 }));
const expense4 = store.dispatch(addExpense({ description: 'fourth expense', note: 'note about expense 4', amount: 400, createdAt: 700 }));

// console.log('Removing expense');
// store.dispatch(removeExpense({ id: expense4.expense.id })); // OR
// store.dispatch(removeExpense(expense1.expense));

// console.log('Editing expense');
// store.dispatch(editExpense(expense2.expense.id, { createdAt: 123 }));

// console.log('Set text filter');
// store.dispatch(setTextFilter('Se'));

console.log('Sort by');
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

console.log('Set start date');
store.dispatch(sortStartDate(202));
// store.dispatch(sortStartDate());

console.log('Set end date');
store.dispatch(sortEndDate(501));
// store.dispatch(sortEndDate());

const demoState = {
  expenses: [{
    id: 'asšdkaspdq23asd21343dsa',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};