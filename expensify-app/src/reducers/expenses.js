// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expenses];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.expenseId);
    case 'EDIT_EXPENSE': {
      return state.map(expense => {
        if (expense.id === action.expenseId) {
          return {
            ...expense,
            ...action.update
          };
        }
      });
    }
    default:
      return state;
  }
};

export default expensesReducer;
