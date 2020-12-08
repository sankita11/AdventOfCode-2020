const util = require('../utils/util')

const acc = getAccumalaterCnt()
console.log(acc)

function getAccumalaterCnt() {

    const input = util.readFile('./input.txt')

    let acc = 0
    let stepNumber = 0

    do{

        let index = 0;
        let commandsRan = {};
    
        while( index < input.length && !commandsRan[index] ){

            commandsRan[index] = 1

            let eachInput = input[index]
            const match = eachInput.match(/^(.*?)((\+|-)(\d+))$/);
 
            let command = match[1].trim();
            const number = parseInt(match[2]);
            
            if( stepNumber == index && command !== 'acc'){
                if( command === 'jmp'){
                    command = 'noc'
                }else {
                    command = 'jmp'
                }
            }

            if( command === 'jmp' ){
                index = index + number
            }else{
                if( command === 'acc') acc = acc + number               
                index = index + 1;
            }

        }

        if( index == input.length){
            break
        }

        stepNumber ++;
        acc = 0 ;


    }while(true)

    return acc;
}