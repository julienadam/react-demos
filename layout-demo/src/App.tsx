import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Layout 
      header={<h1>Mon appli react avec un layout !</h1>} 
      main={<img src={logo} className="App-logo" alt="logo" /> } 
      footer={<p>Fabriqué avec soin par votre artisan développeur local !</p>} />
  );
}

export default App;
