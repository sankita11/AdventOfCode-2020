const utils = require('../utils/util');


async function findTriplet(){

    let input = await utils.readFile('./input.txt');

    input = input.map( (eachInput) => parseInt(eachInput));
    const sortedInput = input.sort((a,b) => a - b)
    const sum = 2020;
    for (let i = 0; i < sortedInput.length - 2; i++) { 
        let l = i + 1; // index of the first element in the 
        let r = sortedInput.length - 1; // index of the last element 
        while (l < r) { 
            if (sortedInput[i] + sortedInput[l] + sortedInput[r] == sum) { 
                console.log("Triplet is %d, %d, %d", sortedInput[i], sortedInput[l], sortedInput[r]); 
                console.log("Product is %d", sortedInput[i] * sortedInput[l] * sortedInput[r]); 
                return sortedInput[i] * sortedInput[l] * sortedInput[r]; 
            } 
            else if (sortedInput[i] + sortedInput[l] + sortedInput[r] < sum) 
                l++; 
            else 
                r--; 
        } 
    }
    return 0 ;
}

findTriplet();