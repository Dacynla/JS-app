import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login functionality here
    console.log('Logging in with:', username, password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add sign up functionality here
    console.log('Signing up with:', username, password);
  };

  return (
    <div className="form-container">
      <div className="login-form">
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button className="login-btn" type="button" onClick={handleLogin}>Login</button>
          <button className="signup-btn" type="button" onClick={handleSignUp}>Sign Up</button>
        </div>
        <div className="form-group">
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
