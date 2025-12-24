import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Signing in with:', { email, password });
    // After successful sign in, you might redirect
    // navigate('/');
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-header">
          <h1>Sign In</h1>
          <p>Use your Apple ID to sign in to your account.</p>
        </div>
        
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email or Apple ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email or Apple ID"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" className="signin-button">Continue</button>
        </form>

        <div className="divider">or</div>

        <div className="social-login">
          <button className="social-button">
            <FaApple /> Continue with Apple
          </button>
          <button className="social-button">
            <FaGoogle /> Continue with Google
          </button>
          <button className="social-button">
            <FaFacebook /> Continue with Facebook
          </button>
        </div>

        <div className="signin-footer">
          Don't have an Apple ID? <a href="/create-account">Create one now</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;