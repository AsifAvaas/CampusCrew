import React from "react";
import { Link } from "react-router-dom";
import "../CSS/footer.css";

function Footer() {
  return (
    <footer className="home-footer theme-bg-primary theme-text-primary">
      <p className="footer-title">
        <strong>HAVIT PRESENTS AUST CSE CARNIVAL &lt;6.0/&gt;</strong>
      </p>
      <div className="footer-links">
        <Link className="footer-link" to="/about">About</Link>
        <Link className="footer-link" to="/contact">Contact</Link>
        <Link className="footer-link" to="/privacy">Privacy Policy</Link>
      </div>
      <p className="footer-bottom">
        &copy; 2025 @CampusCrew. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
