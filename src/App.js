import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dinner from './Dinner';

function App() {
  return (
        <div>
          <h1 className="App">Expense Tracker</h1>
          <hr/>
          <Dinner curry="Karhai" desert='kheer'/>
          <hr/>
          <Dinner curry="Qorma" desert='sheer khurma'/>
          <hr/>
          <Dinner curry="Nehari" desert='shahi tukra'/>
          <hr/>
        </div>
    
  );
}

export default App;
