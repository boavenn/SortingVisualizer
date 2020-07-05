export const swapValues = (arr, i, j) => {
    [arr[i].value, arr[j].value] = [arr[j].value, arr[i].value];
}

export const swapColors = (arr, i, j) => {
    [arr[i].color, arr[j].color] = [arr[j].color, arr[i].color];
}

export const wait = delay => {
    return new Promise(r => setInterval(r, delay));
}