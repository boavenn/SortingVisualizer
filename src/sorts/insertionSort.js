export const insertionSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting }) => {
    let arr = [...bars];
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i].value;

        if (!isSortingRef.current) {
            return;
        }

        while (j >= 0 && arr[j].value > key) {
            arr[j + 1].value = arr[j].value;
            j--;

            await new Promise(r => setTimeout(r, delayRef.current));
            setBars(arr);
            arr = [...arr];

            if (!isSortingRef.current) {
                break;
            }
        }
        arr[j + 1].value = key;
        setBars(arr);
    }
    setIsSorting(false);
}