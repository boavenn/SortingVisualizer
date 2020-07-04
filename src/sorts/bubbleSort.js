export const bubbleSort = async ({ bars, delayRef, isSortingRef, setBars, setIsSorting }) => {
    let temp = [...bars];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < temp.length - 1; i++) {
            if (temp[i].id > temp[i + 1].id) {
                [temp[i], temp[i + 1]] = [temp[i + 1], temp[i]];
                swapped = true;

                await new Promise(r => setTimeout(r, delayRef.current));
                setBars(temp);
                temp = [...temp];
            }
            if (!isSortingRef.current) {
                return;
            }
        }
    } while (swapped);
    setIsSorting(false);
}