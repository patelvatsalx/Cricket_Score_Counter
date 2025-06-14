import React, { useState } from 'react';

function Runs() {
    const [runs, setRuns] = useState(0);
    return (
        <div className="score-wrapper">
            <div className="container">
                <h3 className="counter">Runs: {runs}</h3>
                <div className="button-group">
                    <button className="btn" onClick={() => setRuns(runs + 1)}>Increase</button>
                    <button className="btn" onClick={() => setRuns(runs > 0 ? runs - 1 : 0)}>Decrease</button>
                </div>
            </div>
        </div>
    )
}

export default Runs;