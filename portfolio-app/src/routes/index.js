import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage";
import PortfolioPage from '../components/PortfolioPage';
import Portfolio from '../components/Portfolio';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const Routes = () => (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/portfolio' component={PortfolioPage} />
          <Route path='/portfolio/:id' component={Portfolio} />
          <Route path='/contact' component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
);

export default Routes;
