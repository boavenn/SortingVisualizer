export const bubbleSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting }) => {
    let arr = [...bars];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].value > arr[i + 1].value) {
                [arr[i].value, arr[i + 1].value] = [arr[i + 1].value, arr[i].value];
                swapped = true;

                await new Promise(r => setTimeout(r, delayRef.current));
                setBars(arr);
                arr = [...arr];
            }

            console.log(isSortingRef.current);
            if (!isSortingRef.current) {
                return;
            }
        }
    } while (swapped);
    setIsSorting(false);
}