import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address */}
        <div className="footer-section address">
          <h3>Let’s Get in Touch</h3>

          <div className="address-block">
            <p>
              <strong>Registered Office:</strong>{" "}
              Door no.1-57/960/B, Sri Rama Nagar Colony, Kondapur,
              Serilingampally, Ranga Reddy Telangana-500084 India.
            </p>
          </div>

          <div className="address-block">
            <p>
              <strong>Noida Office:</strong>{" "}
              H Block H-189 1th FLOOR sector 63 Noida - 201301.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/knowledge-center">Knowledge Center</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h3>Online Assist</h3>

          <div className="contact-info">
            <p><strong>Email Us:</strong></p>
            <a href="mailto:operations@tharunasolutions.com">
              operations@tharunasolutions.com
            </a>
            <a href="mailto:hrops@tharunasolutions.com">
              hrops@tharunasolutions.com
            </a>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/tharuna-solutions/people/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} />
            </a>

            <a
              href="mailto:operations@tharunasolutions.com"
              aria-label="Email"
            >
              <FaEnvelope size={26} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Tharuna Solutions LLP — Endless Possibilities With Trading</p>
      </div>
    </footer>
  );
};

export default Footer;
