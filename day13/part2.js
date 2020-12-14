const util = require('../utils/util')

const earliestTimestamp = findBusID();
console.log( earliestTimestamp)


function findBusID(){

    const input = util.readFile('./input.txt')

    let busIDIndexArr = []
    let arr =  input[1].split(/,/).forEach( ( eachInput, index ) => {
        if( eachInput != 'x'){
            busIDIndexArr.push([parseInt(eachInput), index])
        }           
    })
   
    //Keep record of the current earliest timestamp
    let earliestTimestamp = 0
    let runningProduct = 1

    //Inspired by Liz's solution: https://youtube.com/watch?v=z5hR01EmgtM
    busIDIndexArr.forEach(( eachElem) => {
        const [ busID, busIDIndex ] = eachElem;
        while((earliestTimestamp + busIDIndex) % busID != 0){
            earliestTimestamp += runningProduct
        }
        runningProduct *= busID
    })
    

    return earliestTimestamp;

}

