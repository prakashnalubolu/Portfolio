import React, { useState, useEffect } from 'react';
import Draggable from "react-draggable";

function Introduction({ isActive, setActiveSection }) {
  const [expanded, setExpanded] = useState(false);

  // When isActive changes (i.e., clicked from Sidebar), sync it with expanded state
  useEffect(() => {
    setExpanded(isActive);
  }, [isActive]);

  return (
    <Draggable>
    <div 
      id="introduction" 
      className={`notebook-cell ${expanded ? 'expanded' : ''}`} 
      onClick={() => setExpanded(!expanded)} 
    >
      <div className="cell-header">
        <span>[ {expanded ? " " : "▶"} ]</span> Introduction
      </div>

      {/* Expandable Content */}
      {expanded && (
        <div className="cell-content">
          <div className="intro-container">
            <div className="intro-text">
              <p>
                Hello! I'm <strong>Saiprakash Nalubolu</strong>, a passionate and driven Computer Science 
                graduate student at <strong>Binghamton University</strong>, specializing in Artificial 
                Intelligence and Machine Learning. With a strong foundation in software engineering 
                and hands-on experience in AI/ML applications, I am actively seeking summer 
                internship opportunities in ML/AI engineering roles.
              </p>
            </div>

            <div className="intro-image">
              <img src="/profile-pic.png" alt="Profile" />
            </div>
          </div>

          <div className="full-width-text">
            <p>
              Before diving into my master's, I worked in the IT industry for nearly <strong>three years</strong> 
              as a Selenium Automation Test Engineer at <strong>Tata Consultancy Services</strong>. 
              I led testing efforts for 11 projects, improving regression coverage by 40% and 
              reducing manual testing by 30% through automation. This experience sharpened my 
              problem-solving skills and sparked my interest in leveraging AI for workflow automation.
            </p>

            <p>
              My graduate studies have focused on developing robust machine learning models. 
              As a research assistant, I have worked on projects such as:
            </p>
            <ul>
              <li>Predicting <strong>lung cancer survival rates</strong> using deep learning.</li>
              <li>Analyzing <strong>large-scale whole-slide images</strong> for feature extraction.</li>
              <li>Developing <strong>NLP-based pipelines</strong> for analyzing user engagement 
                  and toxicity trends on social media.</li>
            </ul>

            <p>
              Beyond academics and research, I thrive on tackling real-world problems with AI. 
              Whether it’s fine-tuning pre-trained models, engineering new architectures, or 
              extracting meaningful insights from vast datasets, I am always eager to push the 
              boundaries of AI applications.
            </p>

            <p>
              I am currently seeking a <strong>summer internship</strong> where I can apply my expertise 
              in machine learning, deep learning, and AI-driven solutions. If you're looking for 
              an enthusiastic problem solver with a solid technical foundation and a passion for 
              AI innovation, let’s connect!
            </p>
          </div>
          <button className="close-btn" onClick={() => setExpanded(false)}>˄</button>
        </div>
      )}
    </div>
    </Draggable>
  );
}

export default Introduction;
