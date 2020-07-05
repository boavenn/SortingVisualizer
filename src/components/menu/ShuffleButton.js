import React from 'react';

const ShuffleButton = ({ shuffle, isSorting }) => {
    return (
        <button className='button is-info' onClick={shuffle} disabled={isSorting}>
            Shuffle
        </button>
    )
}

export default ShuffleButton;