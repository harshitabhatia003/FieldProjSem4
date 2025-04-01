import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Payment = () => {
  const location = useLocation();
  const donationData = location.state?.donationData || {
    amount: '1000',
    firstName: 'Guest',
    email: ''
  };

  const [paymentMethod, setPaymentMethod] = useState('googlePay');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: `${donationData.firstName} ${donationData.lastName || ''}`.trim()
  });

  // Calculate total (1.8% gateway fee)
  const amount = Number(donationData.amount) || 0;
  const fee = Math.round(amount * 0.018);
  const total = amount + fee;

  const formatINR = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);
  };

  return (
    <div className="payment-page">
      <Navbar />
      
      <section className="payment-hero">
        <div className="container">
          <h1>Complete Your Donation</h1>
          <p>Donating as: {donationData.firstName} ({donationData.email})</p>
        </div>
      </section>

      <section className="payment-content">
        <div className="container">
          {/* Original Payment Options */}
          <div className="payment-methods">
            <div 
              className={`method-option ${paymentMethod === 'googlePay' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('googlePay')}
            >
              <div className="method-icon">
                <img src="/images/google-pay.png" alt="Google Pay" />
              </div>
              <span>Pay with Google Pay</span>
            </div>

            <div className="divider">or</div>

            <div 
              className={`method-option ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className="method-icon">
                <img src="/images/credit-card.png" alt="Credit Card" />
              </div>
              <span>Card Payment</span>
            </div>
          </div>

          {paymentMethod === 'card' && (
            <div className="card-details">
              <h3>Card Information</h3>
              
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>

              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  required
                />
              </div>
            </div>
          )}

          <div className="donation-summary">
            <h3>Donation Summary</h3>
            <div className="summary-row">
              <span>Amount:</span>
              <span>{formatINR(amount)}</span>
            </div>
            <div className="summary-row">
              <span>Gateway Fee:</span>
              <span>{formatINR(fee)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>{formatINR(total)}</span>
            </div>
          </div>

          <button className="pay-button">
            Pay {formatINR(total)}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payment;