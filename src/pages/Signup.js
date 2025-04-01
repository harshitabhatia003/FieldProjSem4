import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="auth-center-container">
        <div className="auth-card">
          <h2>Sign Up</h2>
          <div className="auth-tabs">
            <button className="active">Sign Up</button>
            <button onClick={() => window.location.href = '/login'}>Login</button>
          </div>
          <form className="auth-form">
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <div className="auth-footer">
            <p>Already have an account? <a href="/login">Login</a></p>
            <div className="divider">or</div>
            <button className="google-auth">
              <span className="google-icon">G</span>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;