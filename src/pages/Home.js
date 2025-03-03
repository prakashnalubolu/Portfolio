import React, { useState, useEffect } from 'react';
import Introduction from './Introduction';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';

function Home({ activeSection }) {
  return (
    <div className="content">
      <Introduction isActive={activeSection === 'introduction'} />
      <Education isActive={activeSection === 'education'} />
      <Experience isActive={activeSection === 'experience'} />
      <Projects isActive={activeSection === 'projects'} />
      <Skills isActive={activeSection === 'skills'} />
      <Certifications isActive={activeSection === 'certifications'} />
    </div>
  );
}

export default Home;
