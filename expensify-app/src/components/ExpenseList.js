import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses }) => (
  <div>
    <h2>Expense List</h2>
    {expenses.map(expense => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
