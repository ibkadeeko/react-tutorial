import React from "react";
import { Link } from 'react-router-dom'

const PortfolioPage = () => (
  <div>
    <h3>This is My Portfolio Page</h3>
    <div>
      <ul>
        <li><Link to='/portfolio/1'>Item One</Link></li>
        <li><Link to='/portfolio/2'>Item Two</Link></li>
      </ul>
    </div>
  </div>
);

export default PortfolioPage;
