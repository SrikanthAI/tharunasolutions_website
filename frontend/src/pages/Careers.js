import React from "react";
import { Link } from "react-router-dom";
import "./Careers.css";
import careersBanner from "../assets/careers.png";

const jobOpenings = [
  {
    id: 1,
    title: "Stock Trader",
    location: "Noida Sector 63 / Hyderabad",
    experience: "Minimum 6 months",
  },
];

function Careers() {
  return (
    <div className="careers-container">
      {/* Hero */}
      <div className="careers-hero">
        <img
          src={careersBanner}
          alt="Careers at Trade Sense"
          className="careers-image"
        />
        <div className="careers-overlay">
          <h1>Careers</h1>
        </div>
      </div>

      {/* Jobs */}
      <div className="careers-content">
        <h2>Open Positions</h2>

        <div className="job-listings">
          {jobOpenings.map((job) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              className="job-card"
            >
              <h3>{job.title}</h3>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Experience:</strong> {job.experience}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Careers;
