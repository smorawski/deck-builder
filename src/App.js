import React from 'react';
import GloomhavenImage from './resources/gloomhaven.png';
import Router from './routes';

import './App.css';

function App() {
  return (
    <div className="mainPage">
      <header className="mainPage-header">
        <img src={GloomhavenImage} className="gloomhaven-image" alt="logo" />
      </header>
      <div className="mainPage-content">
        <Router />
      </div>
    </div>
  );
}

export default App;
