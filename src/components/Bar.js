import React from 'react';

const Bar = ({height, width, color}) => {
    const style = {
        backgroundColor: color,
        height: `${height}px`,
        width: `${width}px`
    }

    return (
        <div className='bar' style={style}></div>
    )
}

export default React.memo(Bar);