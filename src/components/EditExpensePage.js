import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import RemoveModal from './RemoveModal';

export class EditExpensePage extends Component {
  state = {
    removeRequested: false
  };

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemoveExpense = () => {
    this.setState(() => ({ removeRequested: true }));
  };

  handleRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/dashboard');
  };

  closeRemoveModal = () => {
    this.setState(() => ({ removeRequested: false }));
  }

  render() {
    return (
      < div >
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button
            className="button button--secondary"
            onClick={this.onRemoveExpense}>
            Remove Expense
          </button>
          <RemoveModal
            removeRequested={this.state.removeRequested}
            handleRemove={this.handleRemove}
            handleCancel={this.closeRemoveModal}
          />
        </div>
      </div >
    )
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, { startEditExpense, startRemoveExpense })(EditExpensePage);