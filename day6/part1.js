const utils = require('../utils/util')

const answerCnt = getAnswers();
console.log(answerCnt);

function getAnswers() {

    const input = utils.readFile('./input.txt')

    let answerCnt = 0;
    let answerMap = {};
    input.forEach((eachInput, index) => {
        if( eachInput !== ''){
            parseInput(eachInput, answerMap);
        }
        
        if(eachInput === '' || index == input.length - 1 ) {
            answerCnt += Object.keys(answerMap).length
            answerMap = {}            
        }
    })

    return answerCnt;
    
}

function parseInput(input, answerMap) {

    input.split('').map((eachChar) => answerMap[eachChar] = 1)
    return answerMap;

}