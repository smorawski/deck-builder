import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import ChooseClass from './components/choose-class';
import ClassDeck from './components/class-deck';
import ImportDeck from './components/import-deck';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/import/:importString?" component={ImportDeck} />
      <Route path="/:classKey/" component={ClassDeck} />
      <Route path="/" component={ChooseClass} />
    </Switch>
  </Router>
);

export default Routes;
