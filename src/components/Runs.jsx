import React from 'react';
import { useRunsContext } from '../context/RunsContext';

const Runs = () => {
    const { runs, updateRuns } = useRunsContext();

    return (
        <div className="container">
            <h3 className="counter">Runs: {runs}</h3>
            <div className="button-group">
                <button className="btn" onClick={() => updateRuns(runs + 1)}>Increment</button>
                <button className="btn" onClick={() => updateRuns(runs > 0 ? runs - 1 : 0)}>Decrement</button>
            </div>
        </div>
    )
}

export default Runs
