import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Route to the registration page
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>BookChainNova Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <button onClick={handleRegisterRedirect} className="register-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;