import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

const jobDetails = {
  1: {
    title: "Stock Trader",
    location: "Noida Sector 63",
    experience: "Minimum 6 months",
    responsibilities: [
      "Execute options trading strategies effectively across multiple markets.",
      "Develop and backtest trading strategies to maximize returns and mitigate risks.",
      "Monitor market conditions and analyze relevant financial data to identify trading opportunities.",
      "Manage portfolio risk and ensure compliance with risk management policies.",
      "Collaborate with research and technology teams to improve trading strategies and systems.",
      "Prepare daily reports on trading performance and market activities.",
      "Stay updated on market news, trends, and economic events that could impact trading.",
    ],
    values: ["Analytical mindset", "Strong decision-making skills", "Passion for the markets"],
  },
};

function JobDetails() {
  const { id } = useParams();
  const job = jobDetails[id];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!job) return <p>Job not found!</p>;

  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Experience:</strong> {job.experience}</p>

      <h3>Key Responsibilities:</h3>
      <ul>
        {job.responsibilities.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <h3>We Value:</h3>
      <ul>
        {job.values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      {/* Apply Now Button - Opens Modal */}
      <button onClick={() => setIsModalOpen(true)} className="apply-button">
        Apply Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>✖</button>
            <iframe
                src="https://app.youform.com/forms/7a9f005n"
                title="Job Application Form"
                width="100%"
                height="500px"
                frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobDetails;
