import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">lodash</Link></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route exact path="/"  element={<Home />}/>
          <Route path="/about"  element={<About />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
