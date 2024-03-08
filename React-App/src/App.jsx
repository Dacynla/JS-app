import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import Navbarapp from './Pages/Navbar';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbarapp />
        <Link to="/navbar">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the React logo to learn more
      </p>
    </Router>
  );
}

export default App;
