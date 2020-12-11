const util = require('../utils/util')

const sum = getOccupiedSeatCnt()
console.log(sum)

function getOccupiedSeatCnt() {
    let input = util.readFile('./input.txt')
    let updated = true ;
    const result = []

    while( updated ){
        updated = false
        for( let i = 0; i < input.length; i++){
            const line = input[i].split('');
            for( let j = 0; j < input[i].length; j++){
    
                const counter = getAdjacentOccupied(input, i, j)
                //console.log(counter)
                if( line[j] === 'L' && counter == 0){
                    line[j] = '#'
                    updated = true
                }
                if( line[j] === '#' && counter >= 5){
                    line[j] = 'L'
                    updated = true
                }
            }
            result[i] = line.join('')
        }
        input = result.slice();
            
    }

    let sum = 0;

    result.forEach((eachElm) => {
        const matches = eachElm.match(/#/g)
        if( eachElm.match(/#/g) ) {
            sum += matches.length
        }
    })

    return sum
}

function getAdjacentOccupied(input, x, y){
    
    const adjacentCoord = [
        [1,1],
        [1,0],
        [0,1],
        [-1,-1],
        [-1,0],
        [0,-1],
        [1,-1],
        [-1,1],
      ]

      let counter = 0
      for([dx,dy] of adjacentCoord) {

        for(let incrementer = 1; true; incrementer++){
            const [nx, ny] = [x + dx * incrementer, y + dy * incrementer];

            if (nx < 0 || nx > input.length - 1 ||  ny < 0 || ny > input[nx].length - 1) break
            if( input[nx][ny] == '#'){ counter += 1; break}
            if( input[nx][ny] == 'L'){ break}

        }

      }

      return counter

}