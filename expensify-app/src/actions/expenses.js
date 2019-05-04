// Expenses Action Generators

import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expenseId: id
});

export const editExpense = ({ id }, update) => ({
  type: 'EDIT_EXPENSE',
  expenseId: id,
  update
});
