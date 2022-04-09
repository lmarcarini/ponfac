export const countRepetition = (array: ConstrainedNumber[]) : number[] => 
    array.reduce((result, element) => 
        {result[element]++; return result} , 
        new Array(21).fill(0));
