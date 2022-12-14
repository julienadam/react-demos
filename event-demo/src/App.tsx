import React from 'react';
import './App.css';
import LifeCycleDemo from './components/LifeCycleDemo';
import MouseOverHello from './components/MouseOverHello';
import MouseOverHelloWithState from './components/MouseOverHelloWithState';
import FetchDemo from './components/FetchDemo/FetchDemo'
import AsyncFetchDemo from './components/AsyncFetchDemo/AsyncFetchDemo';
import FetchWithErrorHandling from './components/FetchWithErrorHandling/FetchWithErrorHandling';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Mouse over without state</h2>
        <MouseOverHello />
        <hr/>
        <h2>Mouse over with state</h2>
        <MouseOverHelloWithState Greeting="Salut !" Increment={2} />
        <hr />
        <h2>Lifecycle demo</h2>
        <LifeCycleDemo />
        <hr/>
        <h2>Fetch demo</h2>
        <FetchDemo />
        <hr />
        <h2>Async fetch demo</h2>
        <AsyncFetchDemo />
        <hr />
        <h2>Fetch with error handling</h2>
        <FetchWithErrorHandling />
      </header>
    </div>
  );
}

export default App;
