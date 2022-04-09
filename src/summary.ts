
//essa definição abaixo foi implementada em outro arquivo, por isso está comentada
//declare type ConstrainedNumber = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20

const randomNumber0to20 = () : ConstrainedNumber => <ConstrainedNumber> Math.floor(Math.random() * 21);

//lê números de 0 a 20
//seria o método a mudar dependendo do tipo de leitura
const readNumber= () : ConstrainedNumber => randomNumber0to20();

//lê 10000 números de 0 a 20 e retorna um array com os números lidos
const readAll = () : ConstrainedNumber[] => {
    const arraySize = 10000;
    let arr :  ConstrainedNumber[] = [];
    for (let i = 0; i < arraySize; i++) {
        arr.push(readNumber());
    }
    return arr;
}

//lê quantidade de números repetidos de 0 a 20 e retorna em uma array
const countRepetition = (array: ConstrainedNumber[]) : number[] => 
array.reduce((result, element) => 
    {result[element]++; return result} , 
    new Array(21).fill(0));

//descobre o índice do menor valor
const getLowestIndex = (arr: number[]) =>
    arr.reduce((acc, curr, index) => (curr < arr[acc] ? index : acc), 0);

//descobre o índice do maior valor
const getHighestIndex = (numbers: number[]): number =>  
    numbers.reduce((acc, curr, index) => (curr > numbers[acc] ? index : acc), 0);

let values: ConstrainedNumber[] = readAll();

let repetition: number[] = countRepetition(values);

let highest = getHighestIndex(repetition);

let lowest = getLowestIndex(repetition);

console.log(`Valor mais repetido foi o ${highest} e o menos repetido foi ${lowest}.`);