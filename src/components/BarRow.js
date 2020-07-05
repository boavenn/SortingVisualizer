import React from 'react';
import Bar from './Bar';

const BarRow = ({ bars }) => {
    const barWidth = Math.floor((window.innerWidth * 0.95) / bars.length);
    return (
        <div id='bar-row'>
            {bars.map(bar => (
                <Bar key={bar.id} color={bar.color} width={barWidth}
                    height={bar.value / bars.length * (window.innerHeight * 0.85)}
                />
            ))}
            <div style={{ height: window.innerHeight * 0.85, width: "1px" }}></div>
        </div>
    )
}

export default BarRow