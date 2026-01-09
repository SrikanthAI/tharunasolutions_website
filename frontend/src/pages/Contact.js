import React, { useState } from "react";
import "./Contact.css";
import contactImage from "../assets/contactus.jpeg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <img
          src={contactImage}
          alt="Contact Trade Sense"
          className="contact-image"
        />
        <div className="contact-overlay">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Content */}
      <div className="contact-content">
        {/* Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="contact-info-container">
          <h2>Contact Information</h2>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:operations@tharunasolutions.com">
              operations@tharunasolutions.com
            </a>
          </p>

          <p>
            <strong>Registered Office:</strong> Door no.1-57/960/B, Sri Rama Nagar
            Colony, Kondapur, Serilingampally, Ranga Reddy Telangana-500084
            India.
          </p>

          <p>
            <strong>Branch Office:</strong> H Block H-189 1th FLOOR sector 63
            Noida - 201301.
          </p>

          <div className="contact-map">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.160751961239!2d78.3619583148773!3d17.45209998804005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c3c7e7b8b7%3A0x6d8b9b8b8b8b8b8b!2sSri%20Rama%20Nagar%20Colony%2C%20Kondapur%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1767963300000!5m2!1sen!2sin"
              width="100%"
              height="220"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
