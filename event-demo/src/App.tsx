import React from 'react';
import './App.css';
import MouseOverHello from './components/MouseOverHello';
import MouseOverHelloWithState from './components/MouseOverHelloWithState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MouseOverHello />
        <hr/>
        <MouseOverHelloWithState Greeting="Salut !" />
      </header>
    </div>
  );
}

export default App;
