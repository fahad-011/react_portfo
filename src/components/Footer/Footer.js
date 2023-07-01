import React from "react";
import "./Footer.css";
import "tachyons";

const Footer = () => {
  return (
    <footer className="footer bg-color">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Mohammad Fahad Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
