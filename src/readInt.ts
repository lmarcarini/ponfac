export const readInt = () : ConstrainedNumber[] => {
    //read 10000 numbers from 0 to 20 and keep them in an array
    let arr :  ConstrainedNumber[] = [];
    for (let i = 0; i < 10000; i++) {
        arr.push(<ConstrainedNumber>Math.floor(Math.random() * 21));
    }
    return arr;
}
