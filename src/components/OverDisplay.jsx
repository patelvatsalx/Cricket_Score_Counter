import React from 'react';
import { useRunsContext } from '../context/RunsContext';
import './OverDisplay.css';

const OverDisplay = () => {
  const { balls, overs, extraBallsInOver } = useRunsContext();
  const currentBall = balls % 6;

  return (
    <div className="over-display">
      <h3>Over {overs}.{currentBall}</h3>
      <div className="dots-container">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className={`ball-dot ${index < currentBall ? 'filled' : ''}`}
          >
            {index === currentBall - 1 && extraBallsInOver > 0 && (
              <span className="extra-ball">●</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverDisplay;
