const utils = require('../utils/util')

const answerCnt = getAnswers();
console.log(answerCnt);

function getAnswers() {

    const input = utils.readFile('./input.txt')

    let answerCnt = 0;
    let answerMap = {};
    let personInGroupCnt = 0;
    input.forEach((eachInput, index) => {

        if( eachInput !== ''){
            parseInput(eachInput, answerMap);
            personInGroupCnt ++;
        }
        
        if(eachInput === '' || index == input.length - 1 ) {
            answerCnt += getCnt(answerMap, personInGroupCnt);
            answerMap = {}
            personInGroupCnt = 0;
        }

    })
    
    return answerCnt;
}

function getCnt(answerMap, personInGroupCnt) {
    const filteredChar = Object.keys(answerMap).filter( (eachChar) => answerMap[eachChar] == personInGroupCnt)
    return filteredChar.length;
}

function parseInput(input, answerMap) {
    input.split('').forEach((eachChar) => answerMap[eachChar] = answerMap[eachChar] + 1 || 1)
    return answerMap;
}