import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink activeClassName="is-active" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/create">
          Add Expense
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/edit">
          Edit
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/help">
          Help
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
