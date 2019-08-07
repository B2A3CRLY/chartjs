import React from 'react';
import logo from './logo.svg';
import Chart from './components/chart';
import './App.css';
import Cards from './components/cards';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h2>Statistique des plus grandes villes de <p style={{color:"blue"}}>Massachusetts</p></h2>
          <strong>Chartjs app with reactjs<br/>The chosen one</strong>
      </header>
      <Cards/>
      <Chart legendPosition="bottom" />
      <h3 style={{color:"green"}}>Copyright Babacar Ly 2019 All rights reserved</h3>
    </div>
  );
}

export default App;
