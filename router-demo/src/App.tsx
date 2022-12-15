import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const Home = () => <h1>Home Page</h1>;
const Foo = () => <h1>Foo Page</h1>;
const Bar = () => <h1>Bar Page</h1>;

class App extends React.Component {
  render() {
    return (
      <div>
      <Router>
        <Header></Header>
        <div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/foo" element={<Foo />} />
              <Route path="/bar" element={<Bar />} />
          </Routes>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
