import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChooseClass from './components/choose-class';
import ClassDeck from './components/class-deck';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/:classKey" component={ClassDeck} />
      <Route path="/" component={ChooseClass} />
    </Switch>
  </Router>
);

export default Routes;
