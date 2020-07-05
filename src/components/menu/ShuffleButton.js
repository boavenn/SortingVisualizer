import React from 'react';

const ShuffleButton = ({ shuffle, isSorting }) => {
    return (
        <button onClick={shuffle} disabled={isSorting}>
            Shuffle
        </button>
    )
}

export default ShuffleButton;