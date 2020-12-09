const util = require('../utils/util')

const number = findWeakNumber()
console.log(number)

function findWeakNumber(){
    const preambleLength = 25;

    const input = util.readFile('./input.txt')
    let minIndex = 0
    for(let i = preambleLength; i < input.length; i++){

        const currentNumber = parseInt(input[i])

        const prevArr = input.slice(minIndex, i);

        const isSumExist = checkIfSumExist(prevArr, currentNumber);
        
        if( !isSumExist ) return currentNumber;

        minIndex++

    }

    return 0
}


function checkIfSumExist( arr, sum ) {
    for( let i = 0; i < arr.length; i++){
        const complement = sum - parseInt(arr[i]);

        const complementIndex =  arr.indexOf(complement.toString());
        if( complementIndex !== -1 && complementIndex > i && arr[i] != complement){
            return true;
        }

    }

    return false;

}