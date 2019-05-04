import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpensePage = ({ expense, dispatch, history }) => {
  return (
    <div>
      <h2>This is the EDIT Expense Page</h2>
      <ExpenseForm
        expense={expense}
        onSubmit={updatedExpense => {
          const { id } = expense;
          console.log(expense);
          console.log(id);
          console.log(updatedExpense);
          dispatch(editExpense({ id }, updatedExpense));
          history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { expenses } = state;
  const { match } = props;
  return {
    expense: expenses.find(expense => expense.id === match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
