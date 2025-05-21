import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* Logo that routes to home and closes menu on mobile */}
      <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>Jen.</Link>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "mobile-show" : ""}`}>
        <li><Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/about" className={isActive("/about") ? "active" : ""} onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
        <li><Link to="/projects" className={isActive("/projects") ? "active" : ""} onClick={() => setMenuOpen(false)}>WORK</Link></li>
        <li><Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
