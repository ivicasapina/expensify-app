import moment from 'moment';

// test data expenses
const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
},
{
  id: '2',
  description: 'Bonbon',
  note: 'bonbon note',
  amount: 3950,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'Choco',
  note: '',
  amount: 2220,
  createdAt: moment(0).add(1, 'days').valueOf()
},
{
  id: '4',
  description: 'Pretzl',
  note: '',
  amount: 1850,
  createdAt: moment(0).add(2, 'days').valueOf()
},
{
  id: '5',
  description: 'Chips',
  note: '',
  amount: 4950,
  createdAt: moment(0).add(3, 'days').valueOf()
}];

export default expenses;