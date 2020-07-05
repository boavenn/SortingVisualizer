export const radixSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting }) => {
    let arr = [...bars];
    let m = arr.length;
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        if (!isSortingRef.current) {
            break;
        }
        await countingSort(arr, exp, delayRef, isSortingRef, setBars);
    }

    setBars(arr);
    setIsSorting(false);
}

const countingSort = async (arr, exp, delayRef, isSortingRef, setBars) => {
    let B = new Array(arr.length);
    let C = new Array(10);
    for (let i = 0; i < arr.length; i++) {
        B[i] = 0;
    }
    for (let i = 0; i < 10; i++) {
        C[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        C[(Math.floor(arr[i].value / exp)) % 10]++;
    }
    for (let i = 1; i < 10; i++) {
        C[i] += C[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        let idx = C[Math.floor(arr[i].value / exp) % 10];
        B[idx - 1] = arr[i].value;
        C[Math.floor(arr[i].value / exp) % 10]--;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!isSortingRef.current) {
            break;
        }

        arr[i].value = B[i];

        await new Promise(r => setInterval(r, delayRef.current));
        setBars(arr);
        arr = [...arr];
    }
}