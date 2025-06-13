import React, { createContext, useState, useContext } from 'react';

const RunsContext = createContext();

export const RunsProvider = ({ children }) => {
  const [runs, setRuns] = useState(0);
  const [extraRuns, setExtraRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);
  const [extraBalls, setExtraBalls] = useState(0);
  const [extraBallsInOver, setExtraBallsInOver] = useState(0);

  const updateRuns = (value) => {
    setRuns(value);
  };

  const addExtraRuns = (type) => {
    setRuns(prev => prev + 1);
    setExtraRuns(prev => prev + 1);
    
    if (type === 'wide' || type === 'no-ball') {
      setExtraBalls(prev => prev + 1);
      setExtraBallsInOver(prev => prev + 1);
    } else {
      setBalls(prev => {
        if (prev === 5) {
          setOvers(prevOvers => prevOvers + 1);
          setExtraBalls(0);
          return 0;
        }
        return prev + 1;
      });
    }
  };

  const resetExtraBalls = () => {
    setExtraBallsInOver(0);
  };

  const updateWickets = () => {
    if (wickets < 9) {  // Only increment if wickets are less than 9
      setWickets(prev => prev + 1);
    }
  };

  return (
    <RunsContext.Provider value={{ 
      runs, 
      extraRuns, 
      updateRuns, 
      addExtraRuns, 
      wickets, 
      updateWickets,
      balls,
      overs,
      extraBalls,
      extraBallsInOver,
      resetExtraBalls,
    }}>
      {children}
    </RunsContext.Provider>
  );
};

export const useRunsContext = () => useContext(RunsContext);
