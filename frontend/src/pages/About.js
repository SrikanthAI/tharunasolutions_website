import React from "react";
import "./About.css"; // Add CSS for styling
import aboutImage from "../assets/aboutus.jpeg"; // Replace with actual image

function About() {
  return (
    <div className="about-container">
      {/* Header Image */}
      <div className="about-header">
        <img src={aboutImage} alt="About Tharuna Solutions" className="about-image" />
        <div className="overlay">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>Tharuna Solutions is a leading IT solutions provider, dedicated to delivering high-quality software and IT services to businesses worldwide.</p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>Our mission is to empower businesses with cutting-edge technology solutions that drive efficiency and innovation.</p>
      </section>

      {/* Vision Section */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>To be a global leader in IT solutions by delivering innovation, reliability, and exceptional customer service.</p>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Experienced and skilled team</li>
          <li>✔ Cutting-edge technology solutions</li>
          <li>✔ Commitment to quality and innovation</li>
          <li>✔ Customer-centric approach</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
