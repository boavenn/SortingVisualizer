import React, { useRef } from 'react';

const DelaySlider = ({ delay, setDelay }) => {
    const input = useRef();

    const handleChange = e => {
        e.preventDefault();
        setDelay(parseInt(input.current.value));
    }

    return (
        <div>
            <div>
                Delay
            </div>
            <input ref={input}
                type='range'
                defaultValue={delay}
                min='5'
                max='100'
                step='5'
                onChange={handleChange}
            />
            <div>
                {delay}
            </div>
        </div>
    )
}

export default DelaySlider;