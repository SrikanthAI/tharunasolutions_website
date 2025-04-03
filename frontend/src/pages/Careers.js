import React from "react";
import { Link } from "react-router-dom";
import careersBanner from "../assets/careers.png";
import "./Careers.css";

const jobOpenings = [
  {
    id: 1,
    title: "Stock Trader",
    location: "Noida Sector 63",
    experience: "Minimum 6 months",
  },
];

function Careers() {
  return (
    <div className="careers-container">
      {/* Hero Section */}
      <div className="careers-hero">
        <img src={careersBanner} alt="Careers" className="hero-image" />
        <h1 className="hero-text">Join Us</h1>
      </div>

      {/* Job Listings */}
      <div className="job-listings">
        {jobOpenings.map((job) => (
          <Link key={job.id} to={`/careers/${job.id}`} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Careers;
