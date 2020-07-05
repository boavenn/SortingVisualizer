export const selectionSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting }) => {
    let arr = [...bars];
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].value < arr[min].value) {
                min = j;
            }

            await new Promise(r => setInterval(r, delayRef.current));
            if (!isSortingRef.current) {
                break;
            }
        }

        if (!isSortingRef.current) {
            break;
        }

        [arr[i].value, arr[min].value] = [arr[min].value, arr[i].value];

        await new Promise(r => setInterval(r, delayRef.current));
        setBars(arr);
        arr = [...arr];
    }
    setIsSorting(false);
}