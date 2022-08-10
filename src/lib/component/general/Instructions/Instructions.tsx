import React from 'react';
import './Instructions.scss';

const Instructions: React.FC = () => (
  <div className="instructionsContainer">
    <span className="step">1. Choose your layout (up to 4 streams)</span>
    <span className="step">
      2. Enter the name of the stream/s you want to watch or copy and paste the
      url/s
    </span>
    <span className="step">3. Click on the &apos;Watch&apos; button</span>
    <span className="step">4. Enjoy!</span>
  </div>
);

export default Instructions;
