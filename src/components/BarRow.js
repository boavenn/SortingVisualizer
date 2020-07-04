import React from 'react';
import Bar from './Bar';

const BarRow = ({ bars }) => {
    const barWidth = Math.floor((window.innerWidth * 0.95) / bars.length);
    return (
        <div id='bar-row'>
            {bars.map(bar => (
                <Bar key={bar.id} color={bar.color} width={barWidth}
                    height={bar.id / bars.length * (window.innerHeight - 50)}
                />
            ))}
        </div>
    )
}

export default BarRow