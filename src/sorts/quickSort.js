import { swapValues, wait } from './util';

export const quickSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting, restoreColor }) => {
    let arr = [...bars];
    await quickSortRec(arr, 0, arr.length - 1, delayRef, isSortingRef, setBars);
    restoreColor();
    setIsSorting(false);
}

const quickSortRec = async (arr, begin, end, delayRef, isSortingRef, setBars) => {
    if (begin < end) {
        let mid = await partition(arr, begin, end, delayRef, isSortingRef, setBars);
        await quickSortRec(arr, begin, mid - 1, delayRef, isSortingRef, setBars);
        await quickSortRec(arr, mid + 1, end, delayRef, isSortingRef, setBars);
    }
}

const partition = async (arr, begin, end, delayRef, isSortingRef, setBars) => {
    if (!isSortingRef.current) {
        return;
    }

    let r = Math.floor(Math.random() * (end - begin) + begin);
    swapValues(arr, r, end);

    setBars(arr);
    arr = [...arr];

    let pivot = arr[end].value;
    arr[r].color = 'red';
    let i = begin - 1;
    for (let j = begin; j < end; j++) {
        if (arr[j].value <= pivot) {
            i++;
            swapValues(arr, i, j);
            await wait(delayRef.current);
            setBars(arr);
            arr = [...arr];
        }

        if (!isSortingRef.current) {
            break;
        }
    }

    if (!isSortingRef.current) {
        return;
    }

    swapValues(arr, i + 1, end);
    arr[r].color = 'whitesmoke';

    setBars(arr);
    arr = [...arr];

    return i + 1;
}