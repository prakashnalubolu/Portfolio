import React, { useState, useEffect } from 'react';
import { FaGithub, FaProjectDiagram } from 'react-icons/fa'; // Import Icons
import Draggable from "react-draggable";

function Projects({ isActive }) {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(isActive);
      }, [isActive]);

  return (
    <Draggable>
    <div id="projects" className={`notebook-cell projects-cell ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
      <div className="cell-header">
        <span>[ {expanded ? " " : "▶"} ]</span> Projects
      </div>

      {expanded && (
        <div className="cell-content">

          {/* Project 1: Analysis of Sports Trends on Reddit & 4chan */}
          <div className="project-card">
            <div className="project-icon"><FaProjectDiagram /></div>
            <div className="project-info">
              <h2>Analysis of Sports Trends on Reddit & 4chan  
                <a href="https://github.com/prakashnalubolu/Social-media-and-Data-science-pipeline" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" />
                </a>
              </h2>
              <p><strong>Duration:</strong> August 2024 - Dec 2024</p>
              <p><strong>Tech Stack:</strong> Python, PostgreSQL, NLP, Hugging Face, Flask, Plotly</p>
              <ul>
                <li>Developed a <strong>data pipeline</strong> to analyze user engagement and toxicity trends on Reddit & 4chan.</li>
                <li>Implemented <strong>sentiment analysis</strong> with Hugging Face transformers.</li>
                <li>Built an <strong>interactive dashboard</strong> using Flask & Plotly to visualize engagement-to-toxicity correlations.</li>
              </ul>
            </div>
          </div>

          {/* Project 2: Handwritten Digit Recognition using CNN */}
          <div className="project-card">
            <div className="project-icon"><FaProjectDiagram /></div>
            <div className="project-info">
              <h2>Handwritten Digit Recognition using CNN  
                <a href="https://github.com/prakashnalubolu/HCI/tree/main/Hand%20written%20digits%20recognition" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" />
                </a>
              </h2>
              <p><strong>Duration:</strong> August 2024 - Sept 2024</p>
              <p><strong>Tech Stack:</strong> Python, TensorFlow, CNN, OpenCV, VGG16, ResNet50, MobileNetV2</p>
              <ul>
                <li>Developed a <strong>custom CNN</strong> for MNIST digit recognition, achieving <strong>99% accuracy</strong>.</li>
                <li>Fine-tuned <strong>pre-trained models</strong> like VGG16 (98.57%), ResNet50, and MobileNetV2.</li>
                <li>Extended recognition to <strong>video frames</strong> using OpenCV.</li>
              </ul>
            </div>
          </div>

          {/* Project 3: Pokémon Battle Prediction */}
          <div className="project-card">
            <div className="project-icon"><FaProjectDiagram /></div>
            <div className="project-info">
              <h2>Pokemon Battle Prediction 
                <a href="https://github.com/prakashnalubolu/Pokemon-battle-predictions" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" />
                </a>
              </h2>
              <p><strong>Duration:</strong> June 2024 - July 2024</p>
              <p><strong>Tech Stack:</strong> Python, Scikit-Learn, Pandas, RandomForestClassifier</p>
              <ul>
                <li>Developed a <strong>Random Forest classifier</strong> to predict Pokémon battle outcomes with <strong>95% accuracy</strong>.</li>
                <li>Engineered features based on <strong>HP, Attack, Defense, and special attributes</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Project 4: Finger Vein Recognition using CNN */}
          <div className="project-card">
            <div className="project-icon"><FaProjectDiagram /></div>
            <div className="project-info">
              <h2>Finger Vein Recognition using CNN  
                <a href="https://github.com/yourrepo/finger-vein" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" />
                </a>
              </h2>
              <p><strong>Duration:</strong> January 2020 - June 2020</p>
              <p><strong>Tech Stack:</strong> Python, TensorFlow, Deep Learning, CNN</p>
              <ul>
                <li>Developed a <strong>CNN-based biometric authentication model</strong> using <strong>finger vein patterns</strong>.</li>
                <li>Achieved high accuracy, demonstrating reliability over traditional <strong>fingerprint scanners</strong>.</li>
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

export default Projects;
