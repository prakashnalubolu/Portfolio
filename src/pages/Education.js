import React, { useState, useEffect } from 'react';
import Draggable from "react-draggable";

function Education({ isActive }) {
  const [expanded, setExpanded] = useState(false);

  // Sync expansion when clicking from sidebar
  useEffect(() => {
    setExpanded(isActive);
  }, [isActive]);

  return (
    <Draggable>
    <div id="education" className={`notebook-cell ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)} >
      <div className="cell-header">
        <span>[ {expanded ? " " : "▶"} ]</span> Education
      </div>

      {expanded && (
        <div className="cell-content">
          {/* Master's Degree - Binghamton University */}
          <div className="edu-section binghamton-bg">
            <div className="edu-info">
              <h2>Master of Science in Computer Science</h2>
              <h3>Binghamton University, State University of New York</h3>
              <p><strong>Specialization:</strong> Artificial Intelligence & Machine Learning</p>
              <p><strong>Graduation:</strong> Expected Dec 2025 <strong>CGPA:</strong> 3.84/4.00 </p>
              <p><strong>Relevant Coursework:</strong></p>
              <ul>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Artificial Intelligence</li>
                <li>Human Computer Interaction</li>
                <li>Social Media and Data Science Pipeline</li>
                <li>Design and Analysis of Algorithms</li>
              </ul>
            </div>
          </div>

          {/* Bachelor's Degree - VIT */}
          <div className="edu-section vit-bg">
            <div className="edu-info">
              <h2>Bachelor of Technology in Computer Science & Engineering</h2>
              <h3>Vellore Institute of Technology (VIT), India</h3>
              <p><strong>Graduation:</strong> June 2021</p>
              <p><strong>Relevant Coursework:</strong></p>
              <ul>
                <li>Image Processing</li>
                <li>Data Visualization</li>
                <li>High Performance Computing</li>
                <li>Database Management Systems</li>
              </ul>
            </div>
          </div>
          <button className="close-btn" onClick={() => setExpanded(false)}>˄</button>
        </div>
      )}
    </div>
    </Draggable>
  );
}

export default Education;
