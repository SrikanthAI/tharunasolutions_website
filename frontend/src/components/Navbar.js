import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      {/* Logo + Company Name */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Tharuna Solutions" className="logo-img" />
        <span className="company-name">Tharuna Solutions</span>
      </Link>

      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li> {/* New Careers Link */}
        <li><Link to="/Knowledge Center" onClick={closeMenu}>Knowledge Center</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
