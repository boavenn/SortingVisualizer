import React from 'react';

const SortSelect = ({ sortNames, chosenSort, setChosenSort }) => {
    const handleChange = e => {
        e.preventDefault();
        setChosenSort(e.target.value);
    }

    return (
        <select value={chosenSort} onChange={handleChange}>
            {sortNames.map((name, idx) => (
                <option key={idx} value={idx}>{name}</option>
            ))}
        </select>
    )
}

export default SortSelect;