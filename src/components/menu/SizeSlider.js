import React, { useRef } from 'react';

const SizeSlider = ({ numOfBars, updateSize, isSorting }) => {
    const input = useRef();

    const handleChange = e => {
        e.preventDefault();
        updateSize(parseInt(input.current.value))
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ color: 'whitesmoke' }}>
                Array size
            </div>
            <input ref={input}
                type='range'
                defaultValue={numOfBars}
                min='10'
                max='300'
                step='10'
                onChange={handleChange}
                disabled={isSorting}
                style={{ marginLeft: "20px" }}
            />
            <div style={{ color: 'whitesmoke', marginLeft: "10px" }}>
                {numOfBars}
            </div>
        </div>
    )
}

export default SizeSlider;