import React from 'react'
import { BallProvider } from './context/BallContext'
import { RunsProvider } from './context/RunsContext';
import Runs from './components/Runs'
import Wickets from './components/Wickets'
import Extras from './components/Extras'
import BallTracker from './components/BallTracker'
import './index.css'

const App = () => {
  return (
    <RunsProvider>
      <BallProvider>
        <div className="score-wrapper">
          <Runs />
          <Wickets />
        </div>
        
        <BallTracker />
        <Extras />
      </BallProvider>
    </RunsProvider>
  )
}

export default App;
