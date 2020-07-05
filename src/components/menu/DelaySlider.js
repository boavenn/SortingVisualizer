import React, { useRef } from 'react';

const DelaySlider = ({ delay, setDelay }) => {
    const input = useRef();

    const handleChange = e => {
        e.preventDefault();
        setDelay(parseInt(input.current.value));
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ color: 'whitesmoke' }}>
                Delay
            </div>
            <input ref={input}
                type='range'
                defaultValue={delay}
                min='5'
                max='100'
                step='5'
                onChange={handleChange}
                style={{ marginLeft: "20px" }}
            />
            <div style={{ color: 'whitesmoke', marginLeft: "10px" }}>
                {delay}
            </div>
        </div>
    )
}

export default DelaySlider;