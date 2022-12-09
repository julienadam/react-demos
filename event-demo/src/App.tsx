import React from 'react';
import './App.css';
import LifeCycleDemo from './components/LifeCycleDemo';
import MouseOverHello from './components/MouseOverHello';
import MouseOverHelloWithState from './components/MouseOverHelloWithState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MouseOverHello />
        <hr/>
        <MouseOverHelloWithState Greeting="Salut !" Increment={2} />
        <hr />
        <LifeCycleDemo />
      </header>
    </div>
  );
}

export default App;
