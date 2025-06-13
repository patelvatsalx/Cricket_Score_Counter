import React from 'react';
import { useBallContext } from '../context/BallContext';
import { useRunsContext } from '../context/RunsContext';

function Extras() {
    const { addExtraBall } = useBallContext();
    const { extraRuns, addExtraRuns } = useRunsContext();

    const handleExtraBall = (type) => {
        addExtraRuns(type.toLowerCase());  // Pass 'wide' or 'no-ball' to context
        addExtraBall();
    };

    return (
        <div className="extras-section">
            <div className="wide-container">
                <h3 className="counter">Extra Runs: {extraRuns}</h3>
                <div className="button-group">
                    <button className="btn" onClick={() => handleExtraBall('wide')}>Wide Ball</button>
                    <button className="btn" onClick={() => handleExtraBall('no-ball')}>No Ball</button>
                </div>
            </div>
        </div>
    );
}

export default Extras;
