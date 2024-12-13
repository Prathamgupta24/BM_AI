// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || location.pathname === '/register';

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">BookChainNova</Link>
      </div>
      {!isAuthPage && (
        <nav className="header-nav">
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/book-management">Book Management</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/chatpdf">Chatpdf</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
