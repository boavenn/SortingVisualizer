import React from 'react';

const ShuffleButton = ({ shuffle }) => {
    return (
        <button onClick={shuffle}>
            Shuffle
        </button>
    )
}

export default ShuffleButton;