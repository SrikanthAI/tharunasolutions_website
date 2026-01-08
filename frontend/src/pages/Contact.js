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
            <strong>Address:</strong> 123, Plot No 224, Ground Floor, Ashok
            Mansion, Kamlapuri Colony, Sri Nagar Colony, Hyderabad, Telangana,
            India – 500073.
          </p>

          <div className="contact-map">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243746.35147763064!2d78.40817250318763!3d17.337886852499405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%2C%20Plot%20No%20224%2C%20Ground%20Floor%2C%20Ashok%20Mansion%2C%20Kamlapuri%20Colony%2C%20Sri%20Nagar%20Colony%2C%20Hyderabad%2C%20Telangana%2C%20India%20%E2%80%93%20500073.!5e0!3m2!1sen!2sin!4v1767875999999!5m2!1sen!2sin"
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
