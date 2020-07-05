import { swapColors, wait } from './util';

export const insertionSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting, restoreColor }) => {
    let arr = [...bars];
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i].value;

        if (!isSortingRef.current) {
            return;
        }

        arr[j + 1].color = 'red';
        while (j >= 0 && arr[j].value > key) {
            arr[j + 1].value = arr[j].value;
            swapColors(arr, j, j + 1);
            j--;

            await wait(delayRef.current);
            setBars(arr);
            arr = [...arr];

            if (!isSortingRef.current) {
                break;
            }
        }
        arr[j + 1].value = key;
        arr[j + 1].color = 'whitesmoke';
        restoreColor();
    }
    setIsSorting(false);
}