import React from 'react';
import './About.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>Supporting single parents since 2025</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                We believe no parent should have to navigate the challenges of single parenting alone. 
                Our mission is to provide comprehensive support, resources, and community to help single 
                parents thrive in all aspects of their lives.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Parents Supported</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Resources Available</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support Network</span>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img src="/images/about-mission.jpg" alt="Parent and child" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>We approach every situation with empathy and understanding.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>Building connections that strengthen and uplift parents.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>Resilience</h3>
              <p>Empowering parents to overcome challenges with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Join Our Growing Community</h2>
          <p>Be part of a network that understands and supports your journey.</p>
          <div className="cta-buttons">
            <a href="/team" className="cta-button secondary">Meet Our Team</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;