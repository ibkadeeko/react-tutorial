import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Gas Bill', amount: 500, createdAt: 300 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 350, createdAt: 1200 }));
store.dispatch(addExpense({ description: 'Electric Bill', amount: 350, createdAt: -120 }));
store.dispatch(addExpense({ description: 'Books', amount: 4000, createdAt: 1000 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

const appRoot = document.getElementById('root');
ReactDOM.render(jsx, appRoot);
