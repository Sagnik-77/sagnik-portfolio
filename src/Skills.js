import React from 'react';
import './Skills.css'; // Import the CSS file for styling

const Skills = () => {
  return (
    <div className="section">
     <div className="skills-header">
      <h2>skills</h2>
     </div>
      <div className="skills-list">
        <ul>
          <li className="whitebttn">UI/UX Design</li>
          <li className="blackbttn">Wireframing</li>
          <li className="whitebttn">Prototyping</li>
          <li className="blackbttn">User Research</li>
          <li className="whitebttn">User Design</li>
          <li className="blackbttn">Design Flow</li>
          <li className="whitebttn">Storytelling</li>
          <li className="blackbttn">Collaboration</li>
        </ul>
      </div>

      <div className="tools-header">
      <h2>tools</h2>
     </div>
      <div className="tools-list">
        <ul>
          <li className="whitebttn">Adobe Xd</li>
          <li className="blackbttn">React JS</li>
          <li className="whitebttn">HTML</li>
          <li className="blackbttn">CSS</li>
          <li className="whitebttn">Framer</li>
          <li className="blackbttn">Adobe Suite</li>
          <li className="whitebttn">Framer</li>
          <li className="blackbttn">Canva</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;