import React, { useState } from "react";
import careersBanner from "../assets/careers.png"; // Import image
import "./Careers.css"; // Import CSS

function Careers() {
  const [jobOpenings] = useState([
    { id: 1, title: "Software Engineer", location: "Hyderabad, India", type: "Full-time", description: "Develop and maintain software applications using modern technologies." },
    { id: 2, title: "UI/UX Designer", location: "Remote", type: "Contract", description: "Create user-friendly designs and improve user experience." },
    { id: 3, title: "DevOps Engineer", location: "Bangalore, India", type: "Full-time", description: "Manage CI/CD pipelines and ensure system scalability." },
    { id: 4, title: "Data Scientist", location: "Mumbai, India", type: "Full-time", description: "Analyze data and build machine learning models." },
    { id: 5, title: "Backend Developer", location: "Chennai, India", type: "Full-time", description: "Work on backend development using Node.js and Python." },
    { id: 6, title: "Product Manager", location: "Remote", type: "Full-time", description: "Lead product strategy and development for key initiatives." },
  ]);

  return (
    <div className="careers-container">
      {/* Hero Section with Image */}
      <div className="careers-hero">
        <img src={careersBanner} alt="Careers" className="hero-image" />
        <h1 className="hero-text">Join Us</h1>
      </div>

      {/* Main Content - Job Listings & Contact Info */}
      <div className="careers-content">
        {/* Job Openings Section */}
        <div className="job-listings">
          {jobOpenings.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p>{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
      </div>
    </div>
  );
}

export default Careers;
