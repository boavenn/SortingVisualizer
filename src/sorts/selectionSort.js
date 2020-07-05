import { swapValues, wait } from './util';

export const selectionSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting, restoreColor }) => {
    let arr = [...bars];
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j - 1].color !== 'red') {
                arr[j - 1].color = 'whitesmoke';
            }
            arr[j].color = 'limegreen';
            setBars(arr);
            arr = [...arr];

            await wait(delayRef.current);
            if (!isSortingRef.current) {
                break;
            }

            if (arr[j].value < arr[min].value) {
                arr[min].color = 'whitesmoke';
                min = j;
                arr[min].color = 'red';
                setBars(arr);
                arr = [...arr];
            }
        }

        if (!isSortingRef.current) {
            break;
        }

        swapValues(arr, i, min);
        arr[min].color = 'whitesmoke';
        arr[arr.length - 1].color = 'whitesmoke';

        await wait(delayRef.current);
        setBars(arr);
        arr = [...arr];
    }
    restoreColor();
    setIsSorting(false);
}