const util = require('../utils/util')


const distance = findManhattanDistance()
console.log(distance)

function findManhattanDistance() {

    const input = util.readFile('./input.txt')

    let x = 0
    let y = 0
    let ang = 0;
    input.forEach((eachInput) => {

        const [fullMatch, direction, unit] = eachInput.match(/^(\w)(\d+)$/) 

        const unitNumber = parseInt(unit);

        if( direction == 'N' ){
            y = y + unitNumber;
        }else if( direction === 'S' ){
            y = y - unitNumber;
        }else if( direction === 'E' ){
            x = x + unitNumber
        }else if( direction === 'W' ){
            x = x - unitNumber
        }else if( direction === 'R' ){
            ang -= unitNumber
        }else if( direction === 'L' ){
            ang += unitNumber
        }else if( direction == 'F'){
            const angRad = ang * Math.PI / 180
            x = x + unit * Math.cos(angRad)
            y = y + unit * Math.sin(angRad)
        }

    })

    return  Math.floor(Math.abs(x) + Math.abs(y))
}