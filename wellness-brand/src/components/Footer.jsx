import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Wellness Brand. All rights reserved.</p>
        <div className="social-media-container">
          <h3>Connect with Us</h3>
          {/* <div className="social-media-box">
            <a href="#" className="social-media-link">LinkedIn</a>
          </div> */}
          <div className="social-media-box">
            <a href="#" className="social-media-link">Facebook</a>
          </div>
          <div className="social-media-box">
            <a href="#" className="social-media-link">Instagram</a>
          </div>
          {/* <div className="social-media-box">
            <a href="#" className="social-media-link">Twitter</a>
          </div> */}
          {/* <div className="social-media-box">
            <a href="#" className="social-media-link">YouTube</a>
          </div> */}
        </div>
      </div>
      <div className="footer-info">
        <p>Contact Us: info@wellnessbrand.com | +1 (555) 123-4567</p>
      </div>
    </footer>
  );
}

export default Footer;
