import React, { useState } from 'react';
import { useBallContext } from '../context/BallContext';

const BallTracker = () => {
  const { balls, currentOver, updateBall } = useBallContext();
  const [lastClickedBall, setLastClickedBall] = useState(null);

  const handleBallClick = (index) => {
    setLastClickedBall(index);
    updateBall(index);
  };

  return (
    <div className="over-section">
      <h3 className="over-title">Over {currentOver}.{balls.filter(ball => ball).length}</h3>
      <div className="balls-container">
        {balls.map((isBowled, index) => (
          <div
            key={index}
            className={`ball ${isBowled ? 'bowled' : 'unbowled'}`}
            onClick={() => handleBallClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BallTracker;
