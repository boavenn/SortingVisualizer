import React from 'react';

const SortButton = ({ isSorting, setIsSorting }) => {
    if (isSorting) {
        return (
            <button onClick={() => setIsSorting(false)}>
                Stop
            </button>
        )
    } else {
        return (
            <button onClick={() => setIsSorting(true)}>
                Sort
            </button>
        )
    }
}

export default SortButton;