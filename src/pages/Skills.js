import React, { useState, useEffect } from 'react';
import { FaPython, FaReact, FaDatabase, FaRobot, FaChartLine, FaCode, FaServer } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPostgresql } from 'react-icons/si';
import Draggable from "react-draggable";

function Skills({ isActive }) {
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    setExpanded(isActive);
  }, [isActive]);

  const skills = [
    { name: "Python", icon: <FaPython />, level: 95 },
    { name: "Machine Learning", icon: <FaRobot />, level: 90 },
    { name: "Deep Learning (TensorFlow)", icon: <SiTensorflow />, level: 85 },
    { name: "Deep Learning (PyTorch)", icon: <SiPytorch />, level: 80 },
    { name: "Data Science & Analytics", icon: <FaChartLine />, level: 85 },
    { name: "SQL & Databases", icon: <FaDatabase />, level: 90 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
    { name: "Scikit-Learn", icon: <SiScikitlearn />, level: 85 },
    { name: "NumPy & Pandas", icon: <SiNumpy />, level: 90 },
    { name: "Full-Stack Development (React, Node.js)", icon: <FaReact />, level: 75 },
    { name: "API Development", icon: <FaServer />, level: 70 },
    { name: "Programming & Problem Solving", icon: <FaCode />, level: 95 }
  ];

  return (
    <Draggable>
    <div id="skills" className={`notebook-cell skills-cell ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)} >
      <div className="cell-header">
        <span>[ {expanded ? " " : "▶"} ]</span> Skills
      </div>

      {expanded && (
        <div className="cell-content">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h2>{skill.name}</h2>
                <div className="skill-bar">
                  <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </div>
          ))}
          <button className="close-btn" onClick={() => setExpanded(false)}>˄</button>
        </div>
      )}
    </div>
    </Draggable>
  );
}

export default Skills;
