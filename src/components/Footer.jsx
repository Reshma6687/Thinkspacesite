import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Focus • Grow • Achieve</p>
        <p className="copyright">
          © {new Date().getFullYear()} ThinkSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
