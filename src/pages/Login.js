import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-center-container">
        <div className="auth-card">
          <h2>Login</h2>
          <div className="auth-tabs">
            <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
            <button className="active">Login</button>
          </div>
          <form className="auth-form">
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot">Forgot password?</a>
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>
          <div className="auth-footer">
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
            <div className="divider">or</div>
            <button className="google-auth">
              <span className="google-icon">G</span>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;