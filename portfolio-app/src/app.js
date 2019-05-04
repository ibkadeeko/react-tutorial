import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('root');

ReactDOM.render(<Routes />, appRoot);
