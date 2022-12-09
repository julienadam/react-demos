import React from 'react';
import logo from './logo.svg';
import Product from './components/Product';
import ProductWithProps from './components/ProductWithProps';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://fr.reactjs.org/" className='link'>React JS Docs</a>
        <img src={logo} className="App-logo" alt="logo" />
        <Product />
        <hr />
        <ProductWithProps Price={47000} Url="https://inara.cz/elite/nearest-outfitting/?formbrief=1&pa3[]=10552" />
      </header>
    </div>
  );
}

export default App;
