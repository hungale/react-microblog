import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

const App = () => {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
};

export default App;
