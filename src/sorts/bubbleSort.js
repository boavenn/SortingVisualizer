import { swapValues, swapColors, wait } from './util';

export const bubbleSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting, restoreColor }) => {
    let arr = [...bars];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i].color = 'red';
            if (arr[i].value > arr[i + 1].value) {
                swapValues(arr, i, i + 1);
                swapColors(arr, i, i + 1);
                swapped = true;

                await wait(delayRef.current);
                setBars(arr);
                arr = [...arr];
            } else {
                arr[i].color = 'whitesmoke';
            }
            arr[arr.length - 1].color = 'whitesmoke';
            if (!isSortingRef.current) {
                restoreColor();
                return;
            }
        }
    } while (swapped);
    setIsSorting(false);
}