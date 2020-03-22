import React from 'react';
import Router from './routes';

import './App.css';

function App() {
  return (
    <div className="mainPage">
      <div className="mainPage__content">
        <Router />
      </div>
    </div>
  );
}

export default App;
