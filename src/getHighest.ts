export const getHighestIndex = (numbers: number[]): number =>  
    numbers.reduce((acc, curr, index) => (curr > numbers[acc] ? index : acc), 0);