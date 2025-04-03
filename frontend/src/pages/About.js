import React from "react";
import "./About.css"; // Updated CSS
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

      {/* Section Container */}
      <div className="about-section-container">
        {/* Company Overview */}
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Tharuna Solutions is a fintech startup revolutionizing financial markets with 
            state-of-the-art trading systems and proprietary FPGA-powered solutions. 
            With a strategic roadmap, we are developing high-performance trading algorithms 
            designed for in-house proprietary trading, leveraging a capital of 100+ crore INR.
          </p>
        </section>

        {/* Mission Section */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses with cutting-edge technology solutions 
            that drive efficiency and innovation.
          </p>
        </section>

        {/* Vision Section */}
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in IT solutions by delivering innovation, reliability, 
            and exceptional customer service.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <p>
            We are backed by industry veterans with over 20 years of experience in fintech 
            and financial markets. Our products will eventually be offered as Fintech SaaS, 
            providing cutting-edge solutions to enterprises.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
