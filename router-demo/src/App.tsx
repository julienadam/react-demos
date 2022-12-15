import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


export const Home = () => <h1>Home Page</h1>;
export const Foo = () => <h1>Foo Page</h1>;
export const Bar = () => <h1>Bar Page</h1>;

class App extends React.Component {
  render() {
    return (
      <div><h1>Header</h1>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link> | &nbsp;
              <Link to="/foo">Foo</Link> | &nbsp;
            <Link to="/bar">Bar</Link>
          </nav>
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
