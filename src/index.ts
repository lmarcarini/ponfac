import { countRepetition } from "./countRepetition";
import { getHighestIndex } from "./getHighest";
import { getLowestIndex } from "./getLowest";
import { readInt } from "./readInt";

let values: ConstrainedNumber[] = readInt();

let repetition: number[] = countRepetition(values);

let highest = getHighestIndex(repetition);

let lowest = getLowestIndex(repetition);

console.log(`Valor mais repetido foi o ${highest} e o menos repetido foi ${lowest}.`);