import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should setup add text filter for provided value', () => {
  const action = setTextFilter('someText');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'someText'
  });
});

test('should setup add text filter for default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate action object for set sortBy to amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: 'amount'
  });
});

test('should generate action object for set sortBy to date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: 'date'
  });
});