const util = require('../utils/util')


const distance = findManhattanDistance()
console.log(distance)

function findManhattanDistance() {

    const input = util.readFile('./input.txt')

    let x = 0
    let y = 0
    let wx = 10;
    let wy = 1;
    let ang = 0;
    input.forEach((eachInput) => {

        const [fullMatch, direction, unit] = eachInput.match(/^(\w)(\d+)$/) 
        const unitNumber = parseInt(unit);

        if( direction == 'N' ){
            wy = wy + unitNumber;
        }else if( direction === 'S' ){
            wy = wy - unitNumber;
        }else if( direction === 'E' ){
            wx = wx + unitNumber
        }else if( direction === 'W' ){
            wx = wx - unitNumber
        }else if( direction === 'R' ){
            const angRad = -1 * unitNumber * Math.PI / 180
            const nx = Math.cos(angRad) * wx - wy * Math.sin(angRad)
            const ny = Math.cos(angRad) * wy + wx * Math.sin(angRad)
            wx = nx
            wy = ny
        }else if( direction === 'L' ){
            const angRad = unitNumber * Math.PI / 180
            const nx = Math.cos(angRad) * wx - wy * Math.sin(angRad)
            const ny = Math.cos(angRad) * wy + wx * Math.sin(angRad)
            wx = nx
            wy = ny
        }else if( direction == 'F'){
            x = x + wx * unitNumber
            y = y + wy * unitNumber
        }

    })

    
    return Math.floor(Math.abs(x) + Math.abs(y))
}