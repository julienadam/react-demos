import React from 'react';
import logo from './logo.svg';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://fr.reactjs.org/" className='link'>React JS Docs</a>
        <img src={logo} className="App-logo" alt="logo" />
        <Product />
      </header>
    </div>
  );
}

export default App;
