export const shellSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting }) => {
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

                await new Promise(r => setInterval(r, delayRef.current));
                setBars(arr);
                arr = [...arr];
            }
            if (!isSortingRef.current) {
                break;
            }
            arr[j].value = key;

            await new Promise(r => setInterval(r, delayRef.current));
            setBars(arr);
            arr = [...arr];
        }
    }
    setIsSorting(false);
}