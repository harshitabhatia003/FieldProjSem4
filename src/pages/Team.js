import React from 'react';
import './Team.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Team = () => {
  const teamMembers = [
    { name: "Rushil Rohra", role: "Team Leader", image: "team1.jpg" },
    { name: "Harshita Bhatia", role: "Backend Engineer", image: "team2.jpg" },
    { name: "Dolly Mangwani", role: "Backend Engineer", image: "team3.jpg" },
    { name: "Anish Udasi", role: "Frontend Engineer", image: "team4.jpg" }
  ];

  return (
    <div className="team-page">
      <Navbar />
      
      <section className="team-hero">
        <div className="container">
          <h1>Our Team</h1>
          <p>We are here for YOU.</p>
        </div>
      </section>

      <section className="team-members">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img 
                    src={`/images/${member.image}`} 
                    alt={member.name} 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "/images/placeholder.jpg"
                    }}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="container">
          <h2>Help us Reach our Goals</h2>
          <a href="/donate" className="cta-button">Support Our Mission</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;