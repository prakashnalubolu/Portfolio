import React, { useState, useEffect } from 'react';
import Draggable from "react-draggable";

function Certifications({ isActive }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(isActive);
  }, [isActive]);

  return (
    <Draggable>
    <div id="certifications" className={`notebook-cell certifications-cell ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)} >
      <div className="cell-header">
        <span>[ {expanded ? " " : "▶"} ]</span> Certifications
      </div>

      {expanded && (
        <div className="cell-content">
          <h2>Coming Soon...</h2>
          <button className="close-btn" onClick={() => setExpanded(false)}>˄</button>
        </div>
      )}
    </div>
    </Draggable>
  );
}

export default Certifications;
