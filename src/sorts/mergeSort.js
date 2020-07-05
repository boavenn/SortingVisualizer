import { wait } from './util';

export const mergeSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting, restoreColor }) => {
    let arr = [...bars];
    await mergeSortRec(arr, 0, arr.length - 1, delayRef, isSortingRef, setBars);
    restoreColor();
    setIsSorting(false);
}

const mergeSortRec = async (arr, begin, end, delayRef, isSortingRef, setBars) => {
    if (!isSortingRef.current) {
        return;
    }

    if (begin < end) {
        let mid = begin + Math.floor((end - begin) / 2);
        await mergeSortRec(arr, begin, mid, delayRef, isSortingRef, setBars);
        await mergeSortRec(arr, mid + 1, end, delayRef, isSortingRef, setBars);
        await merge(arr, begin, mid, end, delayRef, isSortingRef, setBars);
    }
}

const merge = async (arr, begin, mid, end, delayRef, isSortingRef, setBars) => {
    if (!isSortingRef.current) {
        return;
    }

    let len1 = mid - begin + 1;
    let len2 = end - mid;
    let L = new Array(len1);
    let R = new Array(len2);
    for (let i = 0; i < len1; i++) {
        L[i] = arr[begin + i].value;
    }
    for (let i = 0; i < len2; i++) {
        R[i] = arr[mid + i + 1].value;
    }

    let i = 0;
    let j = 0;
    let k = begin;
    while (i < len1 && j < len2) {
        arr[k].color = 'red';
        arr[k++].value = (L[i] <= R[j]) ? L[i++] : R[j++];

        await wait(delayRef.current);
        setBars(arr);
        arr = [...arr];

        arr[k - 1].color = 'whitesmoke';
        if (!isSortingRef.current) {
            return;
        }
    }

    while (i < len1) {
        arr[k++].value = L[i++];
    }
    while (j < len2) {
        arr[k++].value = R[j++];
    }

    setBars(arr);
    arr = [...arr];
}