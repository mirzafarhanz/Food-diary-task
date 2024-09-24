import React from 'react';
import '../css/header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="top-section">
        <div className="top-container">
          <nav className="nav-links">
            <a href="/community">Community</a>
            <a href="/books">Books</a>
            <a href="/recipe-index">Recipe Index</a>
            <a href="/popular">Popular</a>
          </nav>
          <div className="auth-links">
            <a href="/register">Register</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>


      <div className="main-section">
        <div className="logo">
          <img src="/image/logo.png" alt="Cookpal" />
        </div>
        <div className="search-container">
          <select className="category-select">
            <option value="all">All Categories</option>
            <option value="appetizers">Appetizers</option>
            <option value="desserts">Desserts</option>
           
          </select>
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
          <img src="/image/search.png" alt="Cookpal" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
