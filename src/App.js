import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Introduction from './pages/Introduction';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Navbar from './components/Navbar'; 
import Sidebar from './components/Sidebar';
import './theme/theme.css';
import Background from './components/Background';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  return (
    
    <Router>
      <div className="app-container">
        <Background /> 
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar 
          isOpen={sidebarOpen} 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          setActiveSection={setActiveSection} 
        />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home activeSection={activeSection} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
