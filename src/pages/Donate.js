import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Donate = () => {
  const [formData, setFormData] = useState({
    amount: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pinCode: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.amount || isNaN(formData.amount)) {
      alert('Please enter a valid donation amount');
      return;
    }

    // Navigate to payment page with state
    navigate('/payment', {
      state: {
        donationData: formData
      }
    });
  };

  return (
    <div className="donate-page">
      <Navbar />
      
      <section className="donate-hero">
        <div className="container">
          <h1>Support Single Parents</h1>
          <p>Your donation makes a direct impact on families in need</p>
        </div>
      </section>

      <section className="donate-content">
        <div className="container">
          <div className="donate-message">
            <h2>Make a Difference Today</h2>
            <p>
              Check out our Initiatives page and see how your Donation can make a difference. 
              Every rupee helps a Single Parent in need.
            </p>
          </div>

          <form className="donation-form" onSubmit={handleProceedToPayment}>
            {
                 <><div className="form-section">
                              <h3>Donation Amount *</h3>
                              <div className="amount-options">
                                  {[25, 50, 100, 250, 500].map(amount => (
                                      <button
                                          type="button"
                                          key={amount}
                                          className={`amount-option ${formData.amount === amount.toString() ? 'selected' : ''}`}
                                          onClick={() => setFormData({ ...formData, amount: amount.toString() })}
                                      >
                                          ₹{amount}
                                      </button>
                                  ))}
                                  <div className="custom-amount">
                                      <span>₹</span>
                                      <input
                                          type="number"
                                          name="amount"
                                          placeholder="Other amount"
                                          value={formData.amount}
                                          onChange={handleChange}
                                          required />
                                  </div>
                              </div>
                          </div><div className="form-section">
                                  <h3>Personal Information</h3>
                                  <div className="form-row">
                                      <div className="form-group">
                                          <label>First Name *</label>
                                          <input
                                              type="text"
                                              name="firstName"
                                              value={formData.firstName}
                                              onChange={handleChange}
                                              required />
                                      </div>
                                      <div className="form-group">
                                          <label>Last Name *</label>
                                          <input
                                              type="text"
                                              name="lastName"
                                              value={formData.lastName}
                                              onChange={handleChange}
                                              required />
                                      </div>
                                  </div>

                                  <div className="form-row">
                                      <div className="form-group">
                                          <label>Email Address *</label>
                                          <input
                                              type="email"
                                              name="email"
                                              value={formData.email}
                                              onChange={handleChange}
                                              required />
                                      </div>
                                      <div className="form-group">
                                          <label>Phone Number *</label>
                                          <input
                                              type="tel"
                                              name="phone"
                                              value={formData.phone}
                                              onChange={handleChange}
                                              required />
                                      </div>
                                  </div>

                                  <div className="form-group">
                                      <label>Address *</label>
                                      <input
                                          type="text"
                                          name="address"
                                          value={formData.address}
                                          onChange={handleChange}
                                          required />
                                  </div>

                                  <div className="form-row">
                                      <div className="form-group">
                                          <label>City</label>
                                          <input
                                              type="text"
                                              name="city"
                                              value={formData.city}
                                              onChange={handleChange} />
                                      </div>
                                      <div className="form-group">
                                          <label>Pin code</label>
                                          <input
                                              type="text"
                                              name="pinCode"
                                              value={formData.pinCode}
                                              onChange={handleChange} />
                                      </div>
                                  </div>
                              </div></>
            }
            
            <button type="submit" className="donate-button">
              Proceed to Payment
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;