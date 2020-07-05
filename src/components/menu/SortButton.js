import React from 'react';

const SortButton = ({ isSorting, setIsSorting }) => {
    if (isSorting) {
        return (
            <button className='button is-danger' onClick={() => setIsSorting(false)}>
                Stop
            </button>
        )
    } else {
        return (
            <button className='button is-success' onClick={() => setIsSorting(true)}>
                Sort
            </button>
        )
    }
}

export default SortButton;