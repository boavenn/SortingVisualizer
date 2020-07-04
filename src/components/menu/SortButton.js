import React from 'react';

const SortButton = ({ sorts, sortProps, chosenSort }) => {
    return (
        <button onClick={() => sorts[chosenSort](sortProps)}>
            Sort
        </button>
    )
}

export default SortButton;