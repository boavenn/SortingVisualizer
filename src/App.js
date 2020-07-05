import React, { useState, useRef, useEffect } from 'react';
import BarRow from './components/BarRow';
import SortButton from './components/menu/SortButton';
import ShuffleButton from './components/menu/ShuffleButton';
import SortSelect from './components/menu/SortSelect';
import SizeSlider from './components/menu/SizeSlider';
import DelaySlider from './components/menu/DelaySlider';
import { bubbleSort } from './sorts/bubbleSort';
import { selectionSort } from './sorts/selectionSort';
import { insertionSort } from './sorts/insertionSort';
import { shellSort } from './sorts/shellSort';
import { heapSort } from './sorts/heapSort';
import { mergeSort } from './sorts/mergeSort';
import { quickSort } from './sorts/quickSort';
import { radixSort } from './sorts/radixSort';

const initBars = size => {
    let bars = new Array(size);
    for (let i = 0; i < size; i++) {
        bars[i] = { id: i + 1, value: i + 1, color: 'whitesmoke' };
    }
    return bars;
}

const initSorts = () => {
    let sorts = new Array(8);
    sorts[0] = bubbleSort;
    sorts[1] = selectionSort;
    sorts[2] = insertionSort;
    sorts[3] = shellSort;
    sorts[4] = heapSort;
    sorts[5] = mergeSort;
    sorts[6] = quickSort;
    sorts[7] = radixSort;
    return sorts;
}

const initSortNames = () => {
    let sortNames = new Array(8);
    sortNames[0] = 'Bubble Sort';
    sortNames[1] = 'Selection Sort';
    sortNames[2] = 'Insertion Sort';
    sortNames[3] = 'Shell Sort';
    sortNames[4] = 'Heap Sort';
    sortNames[5] = 'Merge Sort';
    sortNames[6] = 'Quick Sort';
    sortNames[7] = 'Radix Sort';
    return sortNames;
}

const initRef = value => {
    const ref = useRef();
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

    const shuffle = () => {
        let temp = initBars(numOfBars);
        for (let i = bars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }
        setBars(temp);
    }

    const restoreColor = () => {
        setBars(bars.map(bar => ({ ...bar, color: 'whitesmoke' })));
    }

    const updateSize = size => {
        setBars(initBars(size));
        setNumOfBars(size);
    }

    useEffect(() => shuffle(), [numOfBars]);

    useEffect(() => {
        if (isSorting) {
            sorts[chosenSort](sortProps);
        }
    }, [isSorting]);

    const sortProps = {
        bars,
        delayRef,
        isSortingRef,
        setBars,
        setIsSorting,
        restoreColor
    }

    return (
        <>
            <SortSelect sortNames={sortNames} chosenSort={chosenSort} setChosenSort={setChosenSort} />
            <ShuffleButton shuffle={shuffle} isSorting={isSorting} />
            <SortButton isSorting={isSorting} setIsSorting={setIsSorting} />
            <SizeSlider numOfBars={numOfBars} updateSize={size => updateSize(size)} isSorting={isSorting} />
            <DelaySlider delay={delay} setDelay={setDelay} isSorting={isSorting} />
            <BarRow bars={bars} />
        </>
    )
}

export default App;