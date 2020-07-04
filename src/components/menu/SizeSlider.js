import React, { useRef } from 'react';

const SizeSlider = ({ numOfBars, updateSize }) => {
    const input = useRef();

    const handleChange = e => {
        e.preventDefault();
        updateSize(parseInt(input.current.value))
    }

    return (
        <div>
            <div>
                Array size
            </div>
            <input ref={input}
                type='range'
                defaultValue={numOfBars}
                min='10'
                max='300'
                step='10'
                onChange={handleChange}
            />
            <div>
                {numOfBars}
            </div>
        </div>
    )
}

export default SizeSlider;