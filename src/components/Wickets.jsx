import React, { useState } from 'react';

function Wickets() {
    const [wickets, setWickets] = useState(0);
    
    return (
        <div className="container">
            <h3 className="counter">Wickets: {wickets}</h3>
            <div className="button-group">
                <button className="btn" onClick={() => setWickets(wickets + 1)}>Increment</button>
                <button className="btn" onClick={() => setWickets(wickets > 0 ? wickets - 1 : 0)}>Decrement</button>
            </div>
        </div>
    )
}

export default Wickets;
