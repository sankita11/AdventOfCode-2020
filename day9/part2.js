const util = require('../utils/util')

const sum = findEncryptionWeakness()
console.log(sum)

function findEncryptionWeakness(){
    const preambleLength = 25;

    const input = util.readFile('./input.txt')
    
    const invalidNumber = getInvalidNumber(input, preambleLength)

    const subArr = getSumSubArr(parseInt(invalidNumber), input)

    const sortedArr = subArr.sort((a,b) => a - b)

    return parseInt(sortedArr[0]) + parseInt(sortedArr[sortedArr.length - 1]);

}

function getSumSubArr( invalidNumber, input){

    for( let i = 0; i < input.length; i++){
        let currSum = parseInt(input[i])
        for( let j = i + 1; j < input.length; j++){

            if( currSum === invalidNumber ){
                return input.slice(i, j); 
            }
            currSum = currSum + parseInt(input[j])
            if( currSum > invalidNumber){
                break;
            }

        }
    }
    return [];

}

function getInvalidNumber( input, preambleLength) {
    let minIndex = 0
    for(let i = preambleLength; i < input.length; i++){

        const numberHere = parseInt(input[i])

        const prevArr = input.slice(minIndex, i);

        const isSumExist = checkIfSumExist(prevArr, numberHere);
        if( !isSumExist ){
            return numberHere
        }

        minIndex++

    }
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