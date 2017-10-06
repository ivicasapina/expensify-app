import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default fiter value', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY', sortBy: 'amount' });

  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filtersReducer({ sortBy: 'amount' }, { type: 'SORT_BY', sortBy: 'date' });

  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = "some text filter";
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);

  expect(state.text).toBe(text);
});

test('should set startDate of action object', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0).add(1, 'days') });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(1, 'days'),
    endDate: moment().endOf('month')
  });
});

test('should set endDate of action object', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0).add(1, 'days') });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment(0).add(1, 'days')
  });
});