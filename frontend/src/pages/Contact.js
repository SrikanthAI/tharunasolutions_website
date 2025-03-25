import React, { useState } from "react";
import "./Contact.css"; // Import the updated CSS
import contactImage from "../assets/contactus.jpeg"; // Ensure you have an image in your project

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent by ${formData.name}`);
  };

  return (
    <div className="contact-container">
      {/* Top Image with Overlay Text */}
      <div className="contact-header">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
        <h1 className="contact-overlay">Contact Us</h1>
      </div>

      {/* Main Content (Form + Details) */}
      <div className="contact-content">
        {/* Left Side: Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Side: Contact Details (With Light Grey Background) */}
        <div className="contact-info-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> operations@tharunasolutions.com</p>
            <p><strong>Phone:</strong> +91 7780592230</p>
            <p><strong>Address:</strong> 123, Plot No 224, Ground Floor, Ashok Mansion, Kamlapuri Colony, Sri Nagar Colony, Hyderabad, Telangana, India, 500073.</p>
            
            {/* Google Maps */}
            <div className="contact-map">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846815!3d37.77492977975853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zT0ZGSUNF!5e0!3m2!1sen!2sin!4v1630419595146!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        © 2025 Tharuna Solutions. All rights reserved.
      </footer>
    </div>
  );
}

export default Contact;
