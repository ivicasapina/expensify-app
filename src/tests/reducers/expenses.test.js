import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state.length).toBe(4);
  expect(state).toEqual([expenses[0], expenses[2], expenses[3], expenses[4]]);
});

test('should not remove expenseif id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);

  expect(state.length).toBe(5);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '6',
    description: 'new',
    note: 'new',
    createdAt: moment(0),
    amount: 2300
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);

  expect(state.length).toBe(6);
  expect(state[5]).toEqual(expense);
});

test('should edit an expense with correct id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'edited'
    }
  };
  const state = expensesReducer(expenses, action);

  expect(state[1].description).toBe('edited');
});

test('should not edit an expense with incorrect id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'edited'
    }
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0]]);
});

