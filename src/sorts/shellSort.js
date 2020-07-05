import { wait } from './util';

export const shellSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting, restoreColor }) => {
    let arr = [...bars];
    for (let step = Math.floor(arr.length / 2); step > 0; step = Math.floor(step / 2)) {
        for (let i = step; i < arr.length; i++) {
            let key = arr[i].value;
            let j;

            if (!isSortingRef.current) {
                break;
            }

            for (j = i; j >= step && arr[j - step].value > key; j -= step) {
                if (!isSortingRef.current) {
                    break;
                }
                arr[j].value = arr[j - step].value;
                arr[j].color = 'red';

                await wait(delayRef.current);
                setBars(arr);
                arr = [...arr];

                arr[j].color = 'whitesmoke';

                await wait(delayRef.current);
                setBars(arr);
                arr = [...arr];
            }
            if (!isSortingRef.current) {
                break;
            }
            arr[j].value = key;

            await wait(delayRef.current);
            setBars(arr);
            arr = [...arr];
        }
    }
    restoreColor();
    setIsSorting(false);
}