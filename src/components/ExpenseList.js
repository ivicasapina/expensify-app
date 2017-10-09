import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0
        ? (<p>No Expenses</p>)
        : (props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />))
    }
  </div>
);

// ako nema filtera vratimo sve expenses, inace vratimo filtrirane u listu
const mapStateToProps = ({ expenses, filters }) => {
  return {
    expenses: selectExpenses(expenses, filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);