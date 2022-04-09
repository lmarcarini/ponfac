export const getLowestIndex = (arr: number[]) =>
    arr.reduce((acc, curr, index) => (curr < arr[acc] ? index : acc), 0);