import React, { useState, useEffect } from 'react';
import { FaMicroscope, FaLaptopCode } from 'react-icons/fa';
import Draggable from "react-draggable";

function Experience({ isActive }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(isActive);
  }, [isActive]);

  return (
    <Draggable>
    <div id="experience" className={`notebook-cell experience-cell ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)} >
      <div className="cell-header">
        <span>[ {expanded ? " " : "▶"} ]</span> Experience
      </div>

      {expanded && (
        <div className="cell-content">
          {/* Research Assistant Experience */}
          <div className="experience-section ra-bg">
            <div className="experience-icon ra-icon"><FaMicroscope /></div>
            <div className="experience-info">
              <h2>Research Assistant</h2>
              <h3>Binghamton University | Sept 2024 - Mar 2024</h3>
              <p><strong>Project:</strong> Cancer Survival Prediction using AI & ML</p>
              <ul>
                <li>Developing ML models to predict survival outcomes for lung cancer patients.</li>
                <li>Extracting features from Whole Slide Images (WSIs) using deep learning techniques.</li>
                <li>Analyzing genomic data and patient records for clinical insights.</li>
                <li>Fine-tuning pre-trained models for medical image classification.</li>
              </ul>
            </div>
          </div>

          {/* Testing Experience - TCS */}
          <div className="experience-section testing-bg">
            <div className="experience-icon testing-icon"><FaLaptopCode /></div>
            <div className="experience-info">
              <h2>QA-Selenium Automation Tester</h2>
              <h3>Tata Consultancy Services | Mar 2021 - Dec 2023</h3>
              <p><strong>Specialization:</strong> Selenium Automation, API Testing, Agile Development</p>
              <ul>
                <li>Led testing for 17 projects, improving regression test coverage by 40%.</li>
                <li>Developed automated test scripts, reducing manual testing efforts by 30%.</li>
                <li>Performed front-end & back-end testing using Selenium & Soap UI.</li>
                <li>Implemented test cases for effective regression and defect tracking.</li>
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

export default Experience;
