import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
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
    <form className="login-form" onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="login-btn" type="submit">Login</button>
        <button className="signup-btn" type="button" onClick={handleSignUp}>Sign Up</button>
      </div>
    </form>
  );
}

export default LoginForm;
