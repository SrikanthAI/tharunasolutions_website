import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* =========================
            ADDRESS
        ========================== */}
        <div className="footer-section address">
<<<<<<< HEAD
          <h3>Let’s Get in Touch</h3>

          <div className="address-block">
            <p>
              <strong>Head Office:</strong>{" "}
              123, Plot No 224, Ground Floor, Ashok Mansion, Kamlapuri Colony,
              Sri Nagar Colony, Hyderabad, Telangana, India – 500073.
            </p>
          </div>

          <div className="address-block">
            <p>
              <strong>Branch Office:</strong>{" "}
              H-140, 3rd Floor, Office Number 302, Sector 63, Noida – 201301.
            </p>
          </div>
=======
          <h3>Let's Get in Touch</h3>
          <p>
            <strong>Head-Office:</strong> Door no.1-57/960/B <br />
            Sri Rama Nagar Colony, Kondapur, Serilingampally, <br />
            Ranga Reddy, Telangana, India, 500084.
          </p>
          {/*<a
            href="https://maps.google.com/?q=Pacific+Business+Park+Ghaziabad"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-direction"
          >
            GET DIRECTIONS
          </a>*/}

          <p>
            <strong>Branch Office:</strong>  H Block H-189 1th FLOOR  <br />
            Sector 63, Noida, 201301
          </p>
          {/*<a
            href="https://maps.google.com/?q=M3M+SCO+Sector+113+Gurgaon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-direction"
          >
            GET DIRECTIONS
          </a>*/}
>>>>>>> 7129e6e271cfdf31851e3edf65377b773391225b
        </div>

        {/* =========================
            QUICK LINKS
        ========================== */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/knowledge-center">Knowledge Center</a></li>
          </ul>
        </div>

        {/* =========================
            CONTACT
        ========================== */}
        <div className="footer-section contact">
          <h3>Online Assist</h3>

          <div className="contact-info">
            <p><strong>Email Us:</strong></p>

            <a href="mailto:Operations@tharunasolutions.com">
              Operations@tharunasolutions.com
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
              href="mailto:Operations@tharunasolutions.com"
              aria-label="Email"
            >
              <FaEnvelope size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          COPYRIGHT
      ========================== */}
      <div className="footer-bottom">
        <p>
          © 2025 Tharuna Solutions LLP — Endless Possibilities With Trading
        </p>
      </div>
    </footer>
  );
};

export default Footer;
