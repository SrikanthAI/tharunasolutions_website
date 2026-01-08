import React from "react";
import "./About.css";
import aboutImage from "../assets/aboutus.jpeg";

const aboutSections = [
  {
    id: "who-we-are",
    title: "Who We Are",
    content:
      "Trade Sense is a fintech startup revolutionizing financial markets with state-of-the-art trading systems and proprietary FPGA-powered solutions. With a strategic roadmap, we are developing high-performance trading algorithms designed for in-house proprietary trading, leveraging a capital of 100+ crore INR.",
  },
  {
    id: "our-mission",
    title: "Our Mission",
    content:
      "Our mission is to empower businesses with cutting-edge technology solutions that drive efficiency and innovation.",
  },
  {
    id: "our-vision",
    title: "Our Vision",
    content:
      "To be a global leader in IT solutions by delivering innovation, reliability, and exceptional customer service.",
  },
  {
    id: "why-us",
    title: "Why Choose Us?",
    content:
      "We are backed by industry veterans with over 20 years of experience in fintech and financial markets. Our products will eventually be offered as Fintech SaaS, providing cutting-edge solutions to enterprises.",
  },
];

function About() {
  return (
    <div className="about-container">
      {/* Header Banner */}
      <div className="about-header">
        <img
          src={aboutImage}
          alt="About Trade Sense"
          className="about-image"
        />
        <div className="overlay">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Content */}
      <div className="about-section-container">
        {aboutSections.map((section) => (
          <section key={section.id} className="about-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default About;
