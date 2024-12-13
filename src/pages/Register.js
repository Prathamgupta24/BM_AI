import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    try {
      await axiosInstance.post('/auth/register', { name, email, password });
      setSuccess('User registered successfully!');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error(err); // Log full error
      setError(err.response?.data?.error || 'Registration failed. Try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register for BookChainNova</h2>
        <form onSubmit={handleRegister}>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
