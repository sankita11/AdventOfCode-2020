const util = require('../utils/util')

const acc = getAccumalaterCnt()
console.log(acc)

function getAccumalaterCnt() {

    const input = util.readFile('./input.txt')

    let acc = 0
    let isOccuredSecondTime = 0
    let index = 0;
    let commandsRan = {}
    while( !isOccuredSecondTime ) {

        if( commandsRan.hasOwnProperty(index) ){
            isOccuredSecondTime = 1
            break
        }

        commandsRan[index] = 1   
        const eachInput = input[index]
        const match = eachInput.match(/^(.*?)((\+|-)(\d+))$/);

        const command = match[1].trim();
        const number = parseInt(match[2]);

        if( command === 'jmp' ){
            index = index + number
        }else{
            if( command === 'acc')
                acc = acc + number
                  
            index++;
        }

        

    }

    return acc
}