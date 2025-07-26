import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    passwordMatch: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user types
    if (name === 'confirmPassword' || name === 'password') {
      setErrors(prev => ({ ...prev, passwordMatch: '' }));
    }
    if (name === 'phone') {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      newErrors.passwordMatch = "Passwords do not match";
      isValid = false;
    }

    // Validate phone number (basic validation)
    if (formData.phone && !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Add your registration logic here
      console.log(formData);
      alert('Registration successful!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"  
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10,15}"
              title="Phone number should be 10-15 digits"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          
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
              minLength="6"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.passwordMatch && (
              <span className="error-message">{errors.passwordMatch}</span>
            )}
          </div>
          
          <button type="submit" className="register-button">Register</button>
        </form>
        
        <div className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Register;