export const quickSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting }) => {
    let arr = [...bars];
    await quickSortRec(arr, 0, arr.length - 1, delayRef, isSortingRef, setBars);
    setBars(arr);
    setIsSorting(false);
}

const quickSortRec = async (arr, begin, end, delayRef, isSortingRef, setBars) => {
    if (begin < end) {
        let mid = await partition(arr, begin, end, delayRef, isSortingRef, setBars);
        await quickSortRec(arr, begin, mid - 1, delayRef, isSortingRef, setBars);
        await quickSortRec(arr, mid + 1, end, delayRef, isSortingRef, setBars);
    }
}

const partition = async (arr, begin, end, delayRef, isSortingRef, setBars) => {
    let r = Math.floor(Math.random() * (end - begin) + begin);
    [arr[r].value, arr[end].value] = [arr[end].value, arr[r].value];

    setBars(arr);
    arr = [...arr];

    let pivot = arr[end].value;
    let i = begin - 1;
    for (let j = begin; j < end; j++) {
        if (arr[j].value <= pivot) {
            i++;
            [arr[i].value, arr[j].value] = [arr[j].value, arr[i].value];

            await new Promise(r => setInterval(r, delayRef.current));
            setBars(arr);
            arr = [...arr];
        }

        if (!isSortingRef.current) {
            break;
        }
    }

    if (!isSortingRef.current) {
        return;
    }

    [arr[i + 1].value, arr[end].value] = [arr[end].value, arr[i + 1].value];

    setBars(arr);
    arr = [...arr];

    return i + 1;
}