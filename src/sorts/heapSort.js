export const heapSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting }) => {
    let arr = [...bars];
    await buildMaxHeap(arr, arr.length, delayRef, isSortingRef, setBars);
    for (let i = arr.length - 1; i >= 1; i--) {
        [arr[0].value, arr[i].value] = [arr[i].value, arr[0].value];

        await new Promise(r => setTimeout(r, delayRef.current));
        setBars(arr);
        arr = [...arr];

        await heapifyMax(arr, i, 0, delayRef, isSortingRef, setBars);
        if (!isSortingRef.current) {
            break;
        }
    }

    setBars(arr);

    setIsSorting(false);
}

const buildMaxHeap = async (arr, size, delayRef, isSortingRef, setBars) => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        await heapifyMax(arr, size, i, delayRef, isSortingRef, setBars);

        if (!isSortingRef.current) {
            break;
        }
    }
}

const heapifyMax = async (arr, size, i, delayRef, isSortingRef, setBars) => {
    if (!isSortingRef.current) {
        return;
    }

    let l = i * 2 + 1;
    let r = l + 1;
    let largest = i;

    if (l < size && arr[l].value > arr[largest].value) {
        largest = l;
    }
    if (r < size && arr[r].value > arr[largest].value) {
        largest = r;
    }
    if (largest !== i) {
        [arr[i].value, arr[largest].value] = [arr[largest].value, arr[i].value];

        await new Promise(r => setTimeout(r, delayRef.current));
        setBars(arr);
        arr = [...arr];

        await heapifyMax(arr, size, largest, delayRef, isSortingRef, setBars)
    }
}