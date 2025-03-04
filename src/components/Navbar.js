import React, { useState } from 'react';
import { FaShareAlt, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Navbar({ toggleSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const sharePortfolio = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Portfolio link copied!');
  };

  return (
    <nav className="navbar">
      {/* Left Section - Logo and Title */}
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>☰</button>
        <span className="logo">NSP</span>
        <span className="portfolio-title">Saiprakash Nalubolu</span>
        <span className="star">⭐</span>
        <span className="cloud">☁️</span>
        <a href="/Saiprakash_Nalubolu_i.pdf" download className="resume-button"> 📄 Resume </a>
      </div>

      {/* Right Section - Share & Profile */}
      <div className="navbar-right">
        <button className="share-btn" onClick={sharePortfolio}>
          Share <FaShareAlt />
        </button>
        
        <div className="profile" style={{ marginLeft: "-10px" }} onClick={() => setShowDropdown(!showDropdown)}>
          <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
          {showDropdown && (
            <div className="profile-dropdown">
              <a href="https://www.linkedin.com/in/saiprakashnalubolu/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/prakashnalubolu" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="mailto:snalubolu@binghamton.edu">
                <FaEnvelope /> Email
              </a>
              <a href="tel:+14253649845">
                <FaPhone /> +1 (425) 364-9845
              </a>
              <a href="https://g.co/kgs/y6rfgxm" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt /> 47 Chestnut st, Binghamton, NY, 13905
              </a>
            </div>  
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
