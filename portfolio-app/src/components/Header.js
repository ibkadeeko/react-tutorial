import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Portfolio</h1>
    <ul>
      <li><NavLink exact activeClassName='is-active' to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName='is-active' to='/portfolio'>Portfolio</NavLink></li>
      <li><NavLink activeClassName='is-active' to='/contact'>Contact</NavLink></li>
    </ul>
  </div>
);

export default Header;
