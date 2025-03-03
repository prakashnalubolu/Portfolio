import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHome } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar, setActiveSection }) {
  // Tooltip State
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });

  // Show Tooltip on Hover
  const showTooltip = (text, event) => {
    setTooltip({
      show: true,
      text,
      x: event.clientX + 10, // Position slightly away from cursor
      y: event.clientY + 10
    });
  };

  // Hide Tooltip
  const hideTooltip = () => {
    setTooltip({ show: false, text: '', x: 0, y: 0 });
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-links">
        <a href="#" onClick={() => setActiveSection("introduction")}>Introduction</a>
        <a href="#" onClick={() => setActiveSection("education")}>Education</a>
        <a href="#" onClick={() => setActiveSection("experience")}>Experience</a>
        <a href="#" onClick={() => setActiveSection("projects")}>Projects</a>
        <a href="#" onClick={() => setActiveSection("skills")}>Skills</a>
        <a href="#" onClick={() => setActiveSection("certifications")}>Certifications</a>

        {/* Social Icons with Tooltip */}
        <div className="sidebar-icons">
          <a 
            href="https://github.com/prakashnalubolu" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={(e) => showTooltip("github.com/prakashnalubolu", e)}
            onMouseLeave={hideTooltip}
          >
            <FaGithub /> <span className="sidebar-text">GitHub</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/saiprakashnalubolu/" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={(e) => showTooltip("linkedin.com/in/saiprakashnalubolu", e)}
            onMouseLeave={hideTooltip}
          >
            <FaLinkedin /> <span className="sidebar-text">LinkedIn</span>
          </a>

          <a 
            href="mailto:snalubolu@binghamton.edu"
            onMouseEnter={(e) => showTooltip("snalubolu@binghamton.edu", e)}
            onMouseLeave={hideTooltip}
          >
            <FaEnvelope /> <span className="sidebar-text">Email</span>
          </a>

          <a 
            href="tel:+14253649845"
            onMouseEnter={(e) => showTooltip("+1 (425) 364-9845", e)}
            onMouseLeave={hideTooltip}
          >
            <FaPhone /> <span className="sidebar-text">Phone</span>
          </a>

          <a 
            href="https://g.co/kgs/y6rfgxm" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={(e) => showTooltip("47 Chestnut St, Binghamton, NY", e)}
            onMouseLeave={hideTooltip}
          >
            <FaHome /> <span className="sidebar-text">Address</span>
          </a>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.show && (
        <div 
          className="tooltip" 
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
