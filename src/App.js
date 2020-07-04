import React, { useState } from 'react';
import BarRow from './components/BarRow';

const initState = () => {
    let bars = new Array(300);
    for (let i = 0; i < 300; i++) {
        bars[i] = { id: i + 1, color: 'whitesmoke' };
    }
    return bars;
}

const App = () => {
    const [bars, setBars] = useState(initState());

    const shuffle = () => {
        let temp = [...bars];
        for (let i = bars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }
        setBars(temp);
    }

    return (
        <div>
            <button onClick={() => shuffle()}>
                Shuffle
            </button>
            <BarRow bars={bars} />
        </div>
    )
}

export default App;