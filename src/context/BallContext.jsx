import React, { createContext, useState, useContext } from 'react';

const BallContext = createContext();

export const BallProvider = ({ children }) => {
  const [balls, setBalls] = useState(Array(6).fill(false));
  const [currentOver, setCurrentOver] = useState(0);

  const updateBall = (index) => {
    const newBalls = [...balls];
    newBalls[index] = true;
    setBalls(newBalls);
    
    // Only complete the over if we have 6 legal deliveries
    if (newBalls.filter(ball => ball).length === 6) {
      setCurrentOver(prev => prev + 1);
      setBalls(Array(6).fill(false));
    }
  };

  return (
    <BallContext.Provider value={{ balls, currentOver, updateBall }}>
      {children}
    </BallContext.Provider>
  );
};

export const useBallContext = () => useContext(BallContext);
