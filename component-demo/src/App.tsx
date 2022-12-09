import React from 'react';
import logo from './logo.svg';
import Product from './components/Product';
import ProductWithProps from './components/ProductWithProps';
import './App.css';
import ProductWithNestedProps, { ProductData } from './components/ProductWithNestedProps';
import ProductList from './components/ProductList';

function App() {

  var data : Array<ProductData> = [
    { Name: "Frameshift Drive", Category: "Core Internal", ModuleClass: '5D', Price: 426778, Url: "http://example.com" },
    { Name: "Thrusters", Category: "Core Internal", ModuleClass: '5A', Price: 12000000, Url: "http://example.com" },
    { Name: "Life Support", Category: "Core Internal", ModuleClass: '4D', Price: 35678, Url: "http://example.com" },
    { Name: "Sensors", Category: "Core Internal", ModuleClass: '3D', Price: 1250, Url: "http://example.com" },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://fr.reactjs.org/" className='link'>React JS Docs</a>
        <img src={logo} className="App-logo" alt="logo" />
        <Product />
        <hr />
        <ProductWithProps Price={47000} Url="https://inara.cz/elite/nearest-outfitting/?formbrief=1&pa3[]=10552" />
        <hr />
        <ProductWithNestedProps Price={124560} Name="Frameshift Drive" ModuleClass='5D' Category='Core Internal' Url="https://inara.cz/elite/nearest-outfitting/?formbrief=1&pa3[]=10552" />
        <hr />
        <ProductList items={data} />

      </header>
    </div>
  );
}

export default App;
