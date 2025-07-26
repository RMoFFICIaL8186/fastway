import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log({ ...formData, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <div className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </div>
        
        {/* <div className="social-login">
          <p>Or login with</p>
          <div className="social-icons">
            <button type="button" className="social-button google">
              <i className="fab fa-google"></i>
            </button>
            <button type="button" className="social-button facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button type="button" className="social-button twitter">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;