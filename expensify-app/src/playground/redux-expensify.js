import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ACTION GENERATORS
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {},
) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ expenses } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expenseId: expenses.id,
});

const editExpense = ({ id }, update) => ({
  type: 'EDIT_EXPENSE',
  expenseId: id,
  update,
});

// Filters - Action Generators
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT',
  text,
});

const sortByAmount = () => ({
  type: 'SORT_BY',
  sortBy: 'amount',
});

const sortByDate = () => ({
  type: 'SORT_BY',
  sortBy: 'date',
});

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate,
});

const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate,
});

// Expenses
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expenses];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.expenseId);
    case 'EDIT_EXPENSE': {
      return state.map((expense) => {
        if (expense.id === action.expenseId) {
          return {
            ...expense,
            ...action.update,
          };
        }
      });
    }
    default:
      return state;
  }
};

// Filters
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// visible expenses
const getVisibleExpenses = (expenses, {
  text, sortBy, startDate, endDate,
}) => expenses.filter((expense) => {
  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
  const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
  return startDateMatch && endDateMatch && textMatch;
})
  .sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });


const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: 'book', amount: 130, createdAt: -1000 }));
const expense3 = store.dispatch(addExpense({ description: 'TV', amount: 1400, createdAt: 325 }));

// store.dispatch(removeExpense(expense2));
// store.dispatch(removeExpense(expense1));
// store.dispatch(editExpense(expense3.expenses, { amount: 500, note: 'Hiyahhhhh' }));

// store.dispatch(setTextFilter('t'));
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('phone'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(200));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(325));
