import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

const Header = () => {
  const { setIsCartOpen, getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="nav-container">
      <ul>
        <li className="dropdown">
          <Link to="/">
            <img
              src="/images/apple logo.jpg" 
              alt="Apple Logo"
              style={{ width: '50px', height: '50px', verticalAlign: 'middle' }}
            />
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/store">Store</Link>
          <div className="dropdown-content">
            <Link to="/store">View Store</Link>
            <Link to="/">New Arrivals</Link> 
          </div>
        </li>
        <li className="dropdown">
          <Link to="/iphone">iPhone</Link>
          <div className="dropdown-content">
            <Link to="/learn/iphone-16">iPhone 16</Link>
            <Link to="/learn/iphone-16-pro">iPhone 16 Pro</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/watch">Watch</Link>
          <div className="dropdown-content">
            <Link to="/learn/watch">Apple Watch</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/mac">Mac</Link>
          <div className="dropdown-content">
            <Link to="/learn/macbook-air">MacBook Air</Link>
            <Link to="/learn/macbook-pro">MacBook Pro</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/ipad">iPad</Link>
          <div className="dropdown-content">
            <Link to="/learn/ipad-mini">iPad mini</Link>
            <Link to="/learn/ipad-pro">iPad Pro</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/airpods">AirPods</Link>
          <div className="dropdown-content">
            <Link to="/learn/airpods-pro">AirPods Pro</Link>
            <Link to="/learn/airpods-max">AirPods Max</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/tv">TV</Link>
          <div className="dropdown-content">
            <Link to="/learn/apple-tv">Apple TV</Link>
            <Link to="/learn/apple-tv-plus">Apple TV+</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/register">Register</Link>
          <div className="dropdown-content">
            <Link to="/create-account">Create Account</Link>
            <Link to="/sign-in">Sign In</Link>
          </div>
        </li>
        <li className="cart-icon" onClick={() => setIsCartOpen(true)}>
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </li>
      </ul>
    </nav>
  );
}

export default Header;