const util = require('../utils/util')


const distance = findManhattanDistance()
console.log(distance)

function findManhattanDistance() {

    const input = util.readFile('/Users/ankitasinghal/AdventOfCode/day12/inputTest.txt')

    let x = 0
    let y = 0
    let wx = 1
    let wy = 0
    let ang = 0;
    input.forEach((eachInput) => {

        const [fullMatch, direction, unit] = eachInput.match(/^(\w)(\d+)$/) 

        const unitNumber = parseInt(unit);
debugger
        if( direction == 'N' ){
            y = y + unitNumber;
        }else if( direction === 'S' ){
            y = y - unitNumber;
        }else if( direction === 'E' ){
            x = x + unitNumber
        }else if( direction === 'W' ){
            x = x - unitNumber
        }else if( direction === 'R' ){
            const angRad = -1 * unitNumber * Math.PI / 180
            const nx = Math.cos(angRad) 
            const ny = Math.cos(angRad) 
            wx = nx
            wy = ny
        }else if( direction === 'L' ){
            const angRad = unitNumber * Math.PI / 180
            const nx = Math.cos(angRad) 
            const ny = Math.cos(angRad) 
            wx = nx
            wy = ny
        }else if( direction == 'F'){
            const angRad = ang * Math.PI / 180
            x +=  wx * unitNumber 
            y += wy * unitNumber 
        }

    })

    return  Math.floor(Math.abs(x) + Math.abs(y))
}