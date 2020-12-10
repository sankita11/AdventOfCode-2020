const util = require('../utils/util');

const product = findAdaptors()
console.log(product)

function findAdaptors() {

    const input = util.readFile('input.txt');

    //Convert each input from string to integer and sort the array in ascending order
    const typedInput = input.map( eachInput => parseInt(eachInput)).sort((a,b) => a - b);

    const diff1 = []
    const diff3 = []
    typedInput.unshift(0);
    for(let start = 1; start < typedInput.length; start++){
        if( typedInput[start ] - typedInput[start - 1 ] === 1) diff1.push(start)
        if( typedInput[start ] - typedInput[start - 1 ] === 3) diff3.push(start)
    }

    diff3.push( typedInput[typedInput.length - 1] + 3)

    return diff1.length * diff3.length;
}