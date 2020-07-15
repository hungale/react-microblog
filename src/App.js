import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Routes from './Routes';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
      {/* <Routes/> */}
    </div>
  );
};

export default App;
