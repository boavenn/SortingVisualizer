import { swapValues, wait } from './util';

export const heapSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting, restoreColor }) => {
    let arr = [...bars];
    await buildMaxHeap(arr, arr.length, delayRef, isSortingRef, setBars);
    for (let i = arr.length - 1; i >= 1; i--) {
        swapValues(arr, i, 0);
        arr[i].color = 'red';
        arr[0].color = 'red';

        await wait(delayRef.current);
        setBars(arr);
        arr = [...arr];

        arr[i].color = 'whitesmoke';
        arr[0].color = 'whitesmoke';

        await heapifyMax(arr, i, 0, delayRef, isSortingRef, setBars);
        if (!isSortingRef.current) {
            break;
        }
    }

    restoreColor();

    setIsSorting(false);
}

const buildMaxHeap = async (arr, size, delayRef, isSortingRef, setBars) => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        await heapifyMax(arr, size, i, delayRef, isSortingRef, setBars);

        if (!isSortingRef.current) {
            break;
        }
    }
}

const heapifyMax = async (arr, size, i, delayRef, isSortingRef, setBars) => {
    if (!isSortingRef.current) {
        return;
    }

    let l = i * 2 + 1;
    let r = l + 1;
    let largest = i;

    if (l < size && arr[l].value > arr[largest].value) {
        largest = l;
    }
    if (r < size && arr[r].value > arr[largest].value) {
        largest = r;
    }
    if (largest !== i) {
        swapValues(arr, i, largest);
        arr[largest].color = 'limegreen';
        arr[i].color = 'limegreen';

        await wait(delayRef.current);
        setBars(arr);
        arr = [...arr];

        arr[largest].color = 'whitesmoke';
        arr[i].color = 'whitesmoke';

        await heapifyMax(arr, size, largest, delayRef, isSortingRef, setBars)
    }
}