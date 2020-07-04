import React, { useState, useRef, useEffect } from 'react';
import BarRow from './components/BarRow';
import SortButton from './components/menu/SortButton';
import ShuffleButton from './components/menu/ShuffleButton';
import SortSelect from './components/menu/SortSelect';
import SizeSlider from './components/menu/SizeSlider';
import DelaySlider from './components/menu/DelaySlider';
import { bubbleSort } from './sorts/bubbleSort';

const initBars = (size, callback) => {
    let bars = new Array(size);
    for (let i = 0; i < size; i++) {
        bars[i] = { id: i + 1, color: 'whitesmoke' };
    }
    if (callback !== undefined) {
        callback();
    }
    return bars;
}

const initSorts = () => {
    let sorts = new Array(1);
    sorts[0] = bubbleSort;
    return sorts;
}

const initSortNames = () => {
    let sortNames = new Array(1);
    sortNames[0] = 'Bubble Sort';
    return sortNames;
}

const initRef = value => {
    const ref = useRef;
    ref.current = value;
    return ref;
}

const App = () => {
    const [numOfBars, setNumOfBars] = useState(100);
    const [bars, setBars] = useState(initBars(numOfBars));
    const [isSorting, setIsSorting] = useState(false);
    const [delay, setDelay] = useState(25);
    const [chosenSort, setChosenSort] = useState(0);
    const [sorts] = useState(initSorts());
    const [sortNames] = useState(initSortNames);

    const isSortingRef = initRef(isSorting);
    const delayRef = initRef(delay);

    const sortProps = {
        bars,
        delayRef,
        isSortingRef,
        setBars,
        setIsSorting
    }

    const shuffle = () => {
        let temp = [...bars];
        for (let i = bars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }
        setBars(temp);
    }

    const updateSize = size => {
        setBars(initBars(size));
        setNumOfBars(size);
    }

    useEffect(() => shuffle(), [numOfBars]);

    return (
        <>
            <SortSelect sortNames={sortNames} chosenSort={chosenSort} setChosenSort={setChosenSort} />
            <ShuffleButton shuffle={shuffle} />
            <SortButton sorts={sorts} sortProps={sortProps} chosenSort={chosenSort} />
            <SizeSlider numOfBars={numOfBars} updateSize={size => updateSize(size)} />
            <DelaySlider delay={delay} setDelay={setDelay} />
            <BarRow bars={bars} />
        </>
    )
}

export default App;