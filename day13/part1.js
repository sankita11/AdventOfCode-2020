const util = require('../utils/util')

const result = findBusID();
console.log( result )


function findBusID(){

    const input = util.readFile('./input.txt')

    const timestamp = input[0]

    let busIds = input[1].split(/,/).filter( eachElem => {
        if( eachElem != 'x') return eachElem
    })
    busIds = busIds.map( eachElem => parseInt(eachElem))

    const busIDMap = {}
    busIds.forEach( eachInput => { 

        let nearsestTimeStamp = timestamp - (timestamp % eachInput);
        const busTimeStamp = []
        while( nearsestTimeStamp < timestamp ){
            nearsestTimeStamp +=  eachInput ;
            busTimeStamp.push(nearsestTimeStamp);
        }
        busIDMap[eachInput] = busTimeStamp
    })

    let diff = busIDMap[busIds[0]] - timestamp;
    let busToTake = busIds[0]
    for( let busTime in busIDMap ){
        busIDMap[busTime].forEach( eachTime => {
            timeDiff = eachTime - timestamp;
            if( timeDiff >= 0 && timeDiff < diff ){
                diff = timeDiff
                busToTake = busTime
            }
        })
    }

    return busToTake * diff

}