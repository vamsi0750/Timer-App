import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Welcome To Timer App Bulid with React js</h1>
        
      </header>
      <Timer start={Date.now()} />
    </div>
  );
}

export default App;
