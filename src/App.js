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

const createBars = size => {
    let bars = new Array(size);
    for (let i = 0; i < size; i++) {
        bars[i] = { id: i + 1, value: i + 1, color: 'whitesmoke' };
    }
    return bars;
}

const shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const initBars = size => {
    let bars = createBars(size);
    shuffleArray(bars);
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

const App = () => {
    const [numOfBars, setNumOfBars] = useState(100);
    const [bars, setBars] = useState(initBars(numOfBars));
    const [isSorting, setIsSorting] = useState(false);
    const [delay, setDelay] = useState(25);
    const [chosenSort, setChosenSort] = useState(0);
    const [sorts] = useState(initSorts());
    const [sortNames] = useState(initSortNames);

    const isSortingRef = useRef(isSorting);
    const delayRef = useRef(delay);
    const initialRender = useRef(true);

    const shuffle = () => {
        setBars(initBars(numOfBars));
    }

    const restoreColor = () => {
        setBars(bars.map(bar => ({ ...bar, color: 'whitesmoke' })));
    }

    const updateSize = size => {
        setNumOfBars(size);
    }

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            shuffle();
        }
    }, [numOfBars]);

    useEffect(() => {
        isSortingRef.current = isSorting;
        if (isSorting) {
            sorts[chosenSort](sortProps);
        }
    }, [isSorting]);

    useEffect(() => {
        delayRef.current = delay;
    }, [delay])

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
            <div id='menu' className='navbar'>
                <div className='navbar-menu'>
                    <div className='navbar-start' style={{ marginLeft: "70px" }}>
                        <div className='navbar-item'>
                            <SizeSlider numOfBars={numOfBars} updateSize={size => updateSize(size)} isSorting={isSorting} />
                        </div>
                        <div style={{
                            width: "1px",
                            height: "80%",
                            background: "whitesmoke",
                            margin: "5px"
                        }}
                        ></div>
                        <div className='navbar-item'>
                            <DelaySlider delay={delay} setDelay={setDelay} isSorting={isSorting} />
                        </div>
                    </div>
                    <div className='navbar-end' style={{ marginRight: "70px" }}>
                        <div className='navbar-item' style={{ marginRight: "10px" }}>
                            <SortSelect sortNames={sortNames} chosenSort={chosenSort} setChosenSort={setChosenSort} />
                        </div>
                        <div className='navbar-item' style={{ marginRight: "10px" }}>
                            <ShuffleButton shuffle={shuffle} isSorting={isSorting} />
                        </div>
                        <div className='navbar-item'>
                            <SortButton isSorting={isSorting} setIsSorting={setIsSorting} />
                        </div>
                    </div>
                </div>
            </div>
            <BarRow bars={bars} />
        </>
    )
}

export default App;