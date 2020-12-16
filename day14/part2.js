const util = require('../utils/util')

const memSum = getMemUsed()
console.log(memSum)

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
    let possibleMasks = []
    instructionToVal.forEach( eachElem => {
        if( eachElem[0] == 'mask'){
            mask = eachElem[1]
            possibleMasks = getAllPossibleMasks(mask)
        }else{
            let[ fullMatch, mem] = eachElem[0].match(/mem\[(\d+)\]/)


            possibleMasks.forEach( eachMask => {
                let binary = parseInt(mem).toString(2).padStart(36, '0').split('');
                console.log(mem)
                for( let bit = 0; bit < 36; bit++){
                    if( mask[bit] !== '0'){
                        binary[bit] = eachMask[bit]
                    }
                }

                memoryMap[parseInt(binary.join(''), 2)] = parseInt(eachElem[1])
    
            }) 

        }
    })

    let sum = 0
    for( let mem in memoryMap ){
        sum += memoryMap[mem] 
    }

    return sum
}

function getAllPossibleMasks(mask){
    if (!mask.includes('X')) return mask;
  
    return [
        getAllPossibleMasks(mask.replace('X', '0')),
        getAllPossibleMasks(mask.replace('X', '1')),
    ].flat();
};

