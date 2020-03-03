import React from 'react';
import ResourcesProvider from './resources/resource-provider';
import Router from './routes';

import './App.css';

function App() {
  return (
    <div className="mainPage">
      <header className="mainPage__header">
        <img src={ResourcesProvider.getGloomhavenLogo()} className="gloomhavenImage" alt="logo" />
      </header>
      <div className="mainPage__content">
        <Router />
      </div>
    </div>
  );
}

export default App;
