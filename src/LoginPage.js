import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // For demonstration purposes, use simple hardcoded values
    if (username === 'admin' && password === 'password') {
      // setIsLoggedIn(true);
      navigate('/home'); // Navigate to the homepage
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        {!isLoggedIn ? (
          <div className="login-box">
            <h2>Login</h2>
            <div className="login-input-container">
              <label className="label">
          <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
        </label>
              
              </div>


               <div className="login-input-container">
              <label className="label">
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </label>
              
              </div>
            
            
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div className="content-box">
            {/* Add content for the admin user */}
            <h2>Welcome, Admin!</h2>
            {/* Add components for video upload, etc. */}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
