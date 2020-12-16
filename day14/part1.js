const util = require('../utils/util')

const sum = getMemUsed()
console.log(sum)

function getMemUsed(){
    const input = util.readFile('./input.txt')

    let instructionToVal = []
    instructionToVal = input.map(eachInput => {
        const matched = eachInput.match(/^(.*?)=(.*?)$/)
        if( matched)
            return [ matched[1].trim(), matched[2].trim()]
    })

    let mask = ''
    let memoryMap = {}
    instructionToVal.forEach( eachElem => {
        if( eachElem[0] == 'mask'){
            mask = eachElem[1]
        }else{
            let binary = parseInt(eachElem[1]).toString(2).padStart(36, '0').split('');

            for( let bit = 0; bit < 36; bit++){
                if( mask[bit] !== 'X'){
                    binary[bit] = mask[bit]
                }
            }

            memoryMap[eachElem[0]] = binary.join('')
        }
    })

    let sum = 0
    for( let mem in memoryMap ){
        sum += parseInt( memoryMap[mem] , 2)
    }

    return sum
}