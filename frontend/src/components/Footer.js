import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Section - Left Aligned */}
        <div className="footer-section address">
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
        </div>


        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Online Assistance - Right Aligned */}
        <div className="footer-section contact">
          <h3>Online Assist</h3>
          <p>
            <strong>EMAIL US:</strong> <br />
            <a href="mailto:Operations@tharunasolutions.com">
              Operations@tharunasolutions.com
            </a>
            <br />
            <a href="mailto:hrops@tharunasolutions.com">
              hrops@tharunasolutions.com
            </a>
          </p>
          {/* <p>
            /<strong>CONTACT US:</strong> <br />
            /<a href="tel:+919718171010">+91-9718171010</a>,{" "}
            /<a href="tel:+919811320207">+91-9811320207</a>
          </p> */}

          {/* Social Icons - Now Below Contact Info */}
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/tharuna-solutions/people/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:Operations@tharunasolutions.com">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Tharuna Solutions LLP - Endless Possibilities With Trading</p>
      </div>
    </footer>
  );
};

export default Footer;
